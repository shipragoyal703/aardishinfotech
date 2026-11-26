
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://aardishinfotech.in";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Blog | Aardish Infotech",
  description:
    "Explore expert insights on web development, WordPress, Shopify, UI/UX design, SEO, and digital marketing. Discover practical tips and technology trends from Aardish Infotech.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Web Development & Digital Marketing Blog | Aardish Infotech",
    description:
      "Read the latest insights, tutorials and strategies on web development, eCommerce, UI/UX design and SEO from Aardish Infotech.",
    url: `${SITE_URL}/blogs`,
    type: "website",
  },
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

// Remove HTML tags for structured data.
function cleanText(value: string = ""): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function Blogs() {
  const blogs = (await fetchAPI(
    "/wp/v2/posts?per_page=12&_embed"
  )) as WordPressBlog[];

  // Dynamic structured data from WordPress posts.
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blogs#webpage`,
        "url": `${SITE_URL}/blogs`,
        "name": "Web Development & Digital Marketing Blog | Aardish Infotech",
        "description":
          "Explore expert insights on web development, WordPress, Shopify, UI/UX design, SEO, and digital marketing.",
        "isPartOf": {
          "@id": `${SITE_URL}/#website`,
        },
        "about": {
          "@id": `${SITE_URL}/#organization`,
        },
        "mainEntity": {
          "@id": `${SITE_URL}/blogs#blog-list`,
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/blogs#blog-list`,
        "name": "Latest Blogs from Aardish Infotech",
        "numberOfItems": blogs.length,
        "itemListElement": blogs.map((blog, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "@id": `${SITE_URL}/blogs/${blog.slug}#article`,
            "url": `${SITE_URL}/blogs/${blog.slug}`,
            "headline": cleanText(blog.title.rendered),
            ...(blog.excerpt?.rendered && {
              "description": cleanText(blog.excerpt.rendered),
            }),
            "publisher": {
              "@id": `${SITE_URL}/#organization`,
            },
            ...(blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && {
              "image":
                blog._embedded["wp:featuredmedia"][0].source_url,
            }),
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogSchema} />

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
                              cleanText(blog.title.rendered)
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
    </>
  );
}
