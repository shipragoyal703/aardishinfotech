
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blogs | Aardish Infotech",
  description:
    "Practical web development tutorials, UI/UX design breakdowns, and SEO playbooks to help your business build faster, rank higher, and convert more customers.",
};

interface WordPressBlog {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
  };
}

export default async function Blogs() {
  const blogs = (await fetchAPI(
    "/wp/v2/posts?per_page=12&_embed"
  )) as WordPressBlog[];

  return (
    <main className="case-studies-page blog-page">
      <section className="case-studies-section">
        <div className="container">

          <div className="case-studies-heading">
            <span className="subheading">INSIGHTS & RESOURCES</span>

            <h1>
              Blogs <strong></strong>
            </h1>

            <p>
              Explore our latest insights, technology trends,
              web development tips and digital strategies to
              help your business grow.
            </p>
          </div>

          <div className="row">
            {blogs.map((blog) => {
              const featuredMedia =
                blog._embedded?.["wp:featuredmedia"]?.[0];

              const image = featuredMedia?.source_url;

              return (
                <div
                  className="col-lg-4 col-md-6"
                  key={blog.id}
                >
                  <article className="case-study-card">

                    {image && (
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="case-study-image"
                      >
                        <Image
                          src={image}
                          width={800}
                          height={500}
                          alt={
                            featuredMedia?.alt_text ||
                            blog.title.rendered.replace(/<[^>]*>/g, "")
                          }
                        />
                      </Link>
                    )}

                    <div className="case-study-card-content">

                      <h2>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          dangerouslySetInnerHTML={{
                            __html: blog.title.rendered,
                          }}
                        />
                      </h2>

                      <div
                        className="case-study-excerpt"
                        dangerouslySetInnerHTML={{
                          __html: blog.excerpt?.rendered || "",
                        }}
                      />

                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="case-study-link"
                      >
                        Read More
                        <span>→</span>
                      </Link>

                    </div>
                  </article>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
