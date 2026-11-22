
"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/blogs.scss";
import Button from "./ui/Button";

interface BlogData {
  blog_subheading?: string;
  blog_heading?: string;
  blog_heading_purple?: string;
  blog_description?: string;
}

interface WordPressMedia {
  source_url: string;
  alt_text?: string;
}

interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WordPressMedia[];
  };
}

interface BlogClientProps {
  data: BlogData;
  posts: WordPressPost[];
}

export default function BlogClient({ data, posts }: BlogClientProps) {
  // Show only latest 3 blogs
  const latestPosts = posts?.slice(0, 3) || [];

  return (
    <section className="blog-section">
      <div className="container">
        {/* BLOG HEADING */}
        <div className="row">
          <div className="col-sm-12 blog-content">
            <span className="subheading">
              {data.blog_subheading}
            </span>

            <h3>
              {data.blog_heading}{" "}
              <span>{data.blog_heading_purple}</span>
            </h3>

            <p>{data.blog_description}</p>
          </div>
        </div>

        {/* LATEST BLOGS */}
        <div className="row blog-post">
          {latestPosts.map((post) => {
            const featuredMedia =
              post._embedded?.["wp:featuredmedia"]?.[0];

            const image = featuredMedia?.source_url || "/placeholder.jpg";

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={post.id}>
                <article className="blog-card">
                  {/* BLOG IMAGE */}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="blog-image"
                  >
                    <Image
                      src={image}
                      alt={featuredMedia?.alt_text || post.title.rendered}
                      width={800}
                      height={500}
                    />
                  </Link>

                  {/* BLOG CONTENT */}
                  <div className="blog-card-content">
                    <h4>
                      <Link href={`/blogs/${post.slug}`}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </Link>
                    </h4>

                    <div
                      className="blog-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt?.rendered || "",
                      }}
                    />

                    {/* READ MORE */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="blog-read-more"
                    >
                      Read More <span>→</span>
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* VIEW ALL BLOGS */}
        <div className="blog-view-all">
          <Button variant = "primary" href="/blogs" className="primary-button">
            View All Blogs →
          </Button>
        </div>
      </div>
    </section>
  );
}
