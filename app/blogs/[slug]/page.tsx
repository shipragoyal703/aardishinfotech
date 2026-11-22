
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

interface WordPressMedia {
  source_url: string;
  alt_text?: string;
}

interface WordPressAuthor {
  name: string;
}

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WordPressMedia[];
    author?: WordPressAuthor[];
    "wp:term"?: WordPressCategory[][];
  };
}

// Fetch Single Blog
async function getBlog(slug: string): Promise<WordPressPost | null> {
  const blogs = (await fetchAPI(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
  )) as WordPressPost[];

  return blogs?.length ? blogs[0] : null;
}

// Fetch Previous and Next Blogs
async function getAdjacentPosts(blog: WordPressPost): Promise<{
  previous: WordPressPost | null;
  next: WordPressPost | null;
}> {
  const [previousPosts, nextPosts] = await Promise.all([
    // Previous published post (older)
    fetchAPI(
      `/wp/v2/posts?before=${encodeURIComponent(
        blog.date
      )}&per_page=1&orderby=date&order=desc`
    ),

    // Next published post (newer)
    fetchAPI(
      `/wp/v2/posts?after=${encodeURIComponent(
        blog.date
      )}&per_page=1&orderby=date&order=asc`
    ),
  ]);

  return {
    previous: (previousPosts as WordPressPost[])?.[0] || null,
    next: (nextPosts as WordPressPost[])?.[0] || null,
  };
}

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Aardish Infotech",
    };
  }

  const description =
    blog.excerpt?.rendered?.replace(/<[^>]*>/g, "").trim() ||
    "Read the latest insights from Aardish Infotech.";

  return {
    title: `${blog.title.rendered.replace(/<[^>]*>/g, "")} | Aardish Infotech`,
    description: description.slice(0, 160),
  };
}

// Single Blog Page
export default async function SingleBlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const { previous, next } = await getAdjacentPosts(blog);

  const featuredMedia = blog._embedded?.["wp:featuredmedia"]?.[0];
  const featuredImage = featuredMedia?.source_url;

  const author =
    blog._embedded?.author?.[0]?.name || "Aardish Infotech";

  const categories =
    blog._embedded?.["wp:term"]?.[0] || [];

  return (
    <main className="single-blog-page">
      <section className="single-blog-section">
        <div className="container">
          <div className="row">

            {/* BLOG CONTENT */}
            <div className="col-lg-8">
              <article className="single-blog-content">

                {/* FEATURED IMAGE */}
                {featuredImage && (
                  <div className="single-blog-image">
                    <Image
                      src={featuredImage}
                      alt={
                        featuredMedia?.alt_text ||
                        blog.title.rendered.replace(/<[^>]*>/g, "")
                      }
                      width={1200}
                      height={700}
                      priority
                    />
                  </div>
                )}

                {/* BLOG TITLE */}
                <h1
                  dangerouslySetInnerHTML={{
                    __html: blog.title.rendered,
                  }}
                />

                {/* BLOG CATEGORIES */}
                <div className="blog-categories">
                  {categories.map((category) => (
                    <span key={category.id}>
                      {category.name}
                    </span>
                  ))}
                </div>

                {/* BLOG META */}
                <div className="blog-meta">
                  <span>By {author}</span>

                  <span>
                    {new Date(blog.date).toLocaleDateString(
                      "en-AU",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>

                {/* BLOG CONTENT */}
                <div
                  className="blog-full-content"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.rendered,
                  }}
                />
              </article>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <aside className="blog-sidebar">

                {/* CONTACT CTA */}
                <div className="blog-sidebar-box">
                  <h3>Need Help With Your Project?</h3>

                  <p>
                    Looking for professional web development
                    and digital solutions? Let&apos;s discuss your
                    business requirements.
                  </p>

                  <Link
                    href="/contact"
                    className="primary-button"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* POST NAVIGATION */}
                <div className="blog-sidebar-box post-navigation">

                  {/* PREVIOUS POST */}
                  {previous && (
                    <Link
                      href={`/blogs/${previous.slug}`}
                      className="post-nav-item previous-post"
                    >
                      <span>← Previous Post</span>

                      <h4
                        dangerouslySetInnerHTML={{
                          __html: previous.title.rendered,
                        }}
                      />
                    </Link>
                  )}

                  {/* NEXT POST */}
                  {next && (
                    <Link
                      href={`/blogs/${next.slug}`}
                      className="post-nav-item next-post"
                    >
                      <span>Next Post →</span>

                      <h4
                        dangerouslySetInnerHTML={{
                          __html: next.title.rendered,
                        }}
                      />
                    </Link>
                  )}

                  {!previous && !next && (
                    <p>No other blog posts available.</p>
                  )}

                  {/* ALL BLOGS */}
                  <Link
                    href="/blogs"
                    className="all-blogs-link"
                  >
                    View All Blogs →
                  </Link>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
