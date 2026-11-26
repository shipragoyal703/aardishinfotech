
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

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
  modified?: string;
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

// Clean WordPress HTML entities and tags for metadata
function cleanText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

// Fetch Single Blog
async function getBlog(
  slug: string
): Promise<WordPressPost | null> {
  try {
    const blogs = (await fetchAPI(
      `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
    )) as WordPressPost[];

    return blogs?.length ? blogs[0] : null;
  } catch (error) {
    console.error("Single Blog Fetch Error:", error);
    return null;
  }
}

// Fetch Previous and Next Blogs
async function getAdjacentPosts(
  blog: WordPressPost
): Promise<{
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const cleanTitle = cleanText(blog.title.rendered);

  const description =
    cleanText(blog.excerpt?.rendered || "").slice(0, 160) ||
    "Read the latest web development, technology and digital marketing insights from Aardish Infotech.";

  const featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const canonicalUrl =
    `https://aardishinfotech.in/blogs/${encodeURIComponent(slug)}`;

  return {
    title: cleanTitle,
    description,

    alternates: {
      canonical: `/blogs/${encodeURIComponent(slug)}`,
    },

    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Aardish Infotech",
      title: cleanTitle,
      description,
      publishedTime: blog.date,
      modifiedTime: blog.modified || blog.date,
      images: featuredImage
        ? [
            {
              url: featuredImage,
              alt: cleanTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: featuredImage ? [featuredImage] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
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

  const featuredMedia =
    blog._embedded?.["wp:featuredmedia"]?.[0];

  const featuredImage = featuredMedia?.source_url;

  const cleanTitle = cleanText(blog.title.rendered);

  const description =
    cleanText(blog.excerpt?.rendered || "") || cleanTitle;

  const author =
    blog._embedded?.author?.[0]?.name || "Aardish Infotech";

  const categories =
    blog._embedded?.["wp:term"]?.[0] || [];

  const canonicalUrl =
    `https://aardishinfotech.in/blogs/${encodeURIComponent(slug)}`;

  // BlogPosting Structured Data
  
  // BlogPosting and WebPage Structured Data
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": cleanTitle,
        "description": description,
        "isPartOf": {
          "@id": "https://aardishinfotech.in/#website"
        },
        "about": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        "mainEntity": {
          "@id": `${canonicalUrl}#article`
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "url": canonicalUrl,
        "headline": cleanTitle,
        "description": description,
        "datePublished": blog.date,
        ...(blog.modified && {
          "dateModified": blog.modified
        }),
        "mainEntityOfPage": {
          "@id": `${canonicalUrl}#webpage`
        },
        "author": blog._embedded?.author?.[0]?.name
          ? {
              "@type": "Person",
              "name": author
            }
          : {
              "@type": "Organization",
              "@id": "https://aardishinfotech.in/#organization"
            },
        "publisher": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        ...(featuredImage && {
          "image": [featuredImage]
        }),
        ...(categories.length > 0 && {
          "articleSection": categories.map(
            (category) => category.name
          )
        }),
        "inLanguage": "en-IN"
      }
    ]
  };


  return (
    <main className="single-blog-page">

      {/* BlogPosting JSON-LD */}
      <JsonLd data={blogSchema} />

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
                        cleanTitle
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
