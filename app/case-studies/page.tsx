
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://aardishinfotech.in";

export const metadata: Metadata = {
  title: "Web Development Case Studies & Projects | Aardish Infotech",

  description:
    "Explore Aardish Infotech case studies featuring website development, eCommerce, UI/UX design and digital solutions. Discover how we help businesses achieve their goals.",

  alternates: {
    canonical: "/case-studies",
  },

  openGraph: {
    title: "Web Development Case Studies | Aardish Infotech",
    description:
      "Explore our portfolio and discover how Aardish Infotech delivers web development, eCommerce and digital solutions for businesses.",
    url: `${SITE_URL}/case-studies`,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Aardish Infotech",
    description:
      "Discover our website development, eCommerce and digital projects.",
  },
};

interface WordPressCaseStudy {
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

// Remove HTML tags and decode common entities.
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

// Case Studies Page
export default async function CaseStudiesPage() {
  const caseStudies = (await fetchAPI(
    "/wp/v2/case-study?per_page=100&_embed"
  )) as WordPressCaseStudy[];

  // CollectionPage and ItemList Structured Data
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/case-studies#webpage`,
        "url": `${SITE_URL}/case-studies`,
        "name": "Web Development Case Studies | Aardish Infotech",
        "description":
          "Explore Aardish Infotech case studies featuring website development, eCommerce, UI/UX design and digital solutions.",
        "isPartOf": {
          "@id": `${SITE_URL}/#website`,
        },
        "about": {
          "@id": `${SITE_URL}/#organization`,
        },
        "mainEntity": {
          "@id": `${SITE_URL}/case-studies#case-study-list`,
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/case-studies#case-study-list`,
        "name": "Aardish Infotech Case Studies",
        "numberOfItems": caseStudies.length,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": caseStudies.map((study, index) => {
          const featuredImage =
            study._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          const studyUrl =
            `${SITE_URL}/case-studies/${encodeURIComponent(study.slug)}`;

          return {
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "@id": `${studyUrl}#case-study`,
              "url": studyUrl,
              "name": cleanText(study.title.rendered),
              ...(study.excerpt?.rendered && {
                "description": cleanText(study.excerpt.rendered),
              }),
              ...(featuredImage && {
                "image": featuredImage,
              }),
              "publisher": {
                "@id": `${SITE_URL}/#organization`,
              },
            },
          };
        }),
      },
    ],
  };

  return (
    <>
      <JsonLd data={caseStudiesSchema} />

      <main className="case-studies-page">
        <section className="case-studies-section">
          <div className="container">

            {/* PAGE HEADING */}
            <div className="case-studies-heading">
              <span className="subheading">OUR WORK</span>

              <h1>
                Case <strong>Studies</strong>
              </h1>

              <p>
                Explore our recent projects and discover how we
                help businesses solve challenges and achieve their
                digital goals.
              </p>
            </div>

            {/* CASE STUDIES */}
            <div className="row">
              {caseStudies.map((caseStudy) => {
                const featuredMedia =
                  caseStudy._embedded?.["wp:featuredmedia"]?.[0];

                const image = featuredMedia?.source_url;

                return (
                  <div
                    className="col-lg-4 col-md-6"
                    key={caseStudy.id}
                  >
                    <article className="case-study-card">

                      {/* IMAGE */}
                      {image && (
                        <Link
                          href={`/case-studies/${caseStudy.slug}`}
                          className="case-study-image"
                        >
                          <Image
                            src={image}
                            width={800}
                            height={500}
                            alt={
                              featuredMedia?.alt_text ||
                              cleanText(caseStudy.title.rendered)
                            }
                            loading="lazy"
                          />
                        </Link>
                      )}

                      {/* CONTENT */}
                      <div className="case-study-card-content">
                        <span className="case-study-tag">
                          CASE STUDY
                        </span>

                        <h2>
                          <Link
                            href={`/case-studies/${caseStudy.slug}`}
                            dangerouslySetInnerHTML={{
                              __html: caseStudy.title.rendered,
                            }}
                          />
                        </h2>

                        <div
                          className="case-study-excerpt"
                          dangerouslySetInnerHTML={{
                            __html: caseStudy.excerpt?.rendered || "",
                          }}
                        />

                        <Link
                          href={`/case-studies/${caseStudy.slug}`}
                          className="case-study-link"
                        >
                          View Case Study
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
