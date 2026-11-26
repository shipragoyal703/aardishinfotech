
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import CaseStudyContent from "@/components/CaseStudyContent";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

interface WordPressCaseStudy {
  id: number;
  slug: string;
  date: string;
  modified?: string;
  link?: string;
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
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
  };
}

const SITE_URL = "https://aardishinfotech.in";

// Remove HTML tags and decode common entities.
function cleanText(value: string = ""): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/\s+/g, " ")
    .trim();
}

// Fetch Single Case Study
async function getCaseStudy(
  slug: string
): Promise<WordPressCaseStudy | null> {
  const posts = (await fetchAPI(
    `/wp/v2/case-study?slug=${encodeURIComponent(slug)}&_embed`
  )) as WordPressCaseStudy[];

  return posts?.length ? posts[0] : null;
}

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Aardish Infotech",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = cleanText(caseStudy.title.rendered);

  const description =
    cleanText(caseStudy.excerpt?.rendered) ||
    `Explore how Aardish Infotech delivered a digital solution through the ${title} case study.`;

  const canonicalUrl =
    `${SITE_URL}/case-studies/${encodeURIComponent(caseStudy.slug)}`;

  const featuredImage =
    caseStudy._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${title} | Aardish Infotech`,
    description: description.slice(0, 160),

    alternates: {
      canonical: `/case-studies/${encodeURIComponent(caseStudy.slug)}`,
    },

    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Aardish Infotech",
      title: `${title} | Aardish Infotech`,
      description: description.slice(0, 200),
      publishedTime: caseStudy.date,
      modifiedTime: caseStudy.modified || caseStudy.date,
      images: featuredImage
        ? [
            {
              url: featuredImage,
              alt: title,
            },
          ]
        : [],
    },

    twitter: {
      card: featuredImage ? "summary_large_image" : "summary",
      title: `${title} | Aardish Infotech`,
      description: description.slice(0, 200),
      images: featuredImage ? [featuredImage] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// Single Case Study Page
export default async function CaseStudyPage({
  params,
}: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const featuredMedia =
    caseStudy._embedded?.["wp:featuredmedia"]?.[0];

  const featuredImage = featuredMedia?.source_url;
  const title = cleanText(caseStudy.title.rendered);

  const description =
    cleanText(caseStudy.excerpt?.rendered) ||
    `Explore how Aardish Infotech delivered a digital solution through the ${title} case study.`;

  const canonicalUrl =
    `${SITE_URL}/case-studies/${encodeURIComponent(caseStudy.slug)}`;

  // WebPage and CreativeWork Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": `${title} | Aardish Infotech`,
        "description": description,
        "isPartOf": {
          "@id": `${SITE_URL}/#website`,
        },
        "about": {
          "@id": `${SITE_URL}/#organization`,
        },
        "mainEntity": {
          "@id": `${canonicalUrl}#case-study`,
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "CreativeWork",
        "@id": `${canonicalUrl}#case-study`,
        "name": title,
        "headline": title,
        "description": description,
        "url": canonicalUrl,
        "datePublished": caseStudy.date,
        "dateModified": caseStudy.modified || caseStudy.date,
        "publisher": {
          "@id": `${SITE_URL}/#organization`,
        },
        "mainEntityOfPage": {
          "@id": `${canonicalUrl}#webpage`,
        },
        ...(featuredImage && {
          "image": [featuredImage],
        }),
        "inLanguage": "en-IN",
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      {/* HERO */}
      <section className="case-study-hero">
        <div className="container">
          <span className="case-study-label">
            CASE STUDY
          </span>

          <h1
            dangerouslySetInnerHTML={{
              __html: caseStudy.title.rendered,
            }}
          />

          {/* FEATURED IMAGE */}
          {featuredImage && (
            <div className="case-study-featured-image">
              <Image
                src={featuredImage}
                width={1536}
                height={1024}
                alt={
                  featuredMedia?.alt_text || title
                }
                priority
              />
            </div>
          )}
        </div>
      </section>

      <main className="single-case-study">
        {/* CASE STUDY CONTENT */}
        <section className="case-study-content-section">
          <div className="container">
            <CaseStudyContent
              content={caseStudy.content.rendered}
            />
          </div>
        </section>
      </main>
    </>
  );
}
