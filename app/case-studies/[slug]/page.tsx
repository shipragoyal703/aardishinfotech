
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import CaseStudyContent from "@/components/CaseStudyContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

interface WordPressCaseStudy {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
  };
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
      title: "Case Study | Aardish Infotech",
    };
  }

  const description =
    "Explore this Aardish Infotech case study and learn about the project, solution, and results.";

  return {
    title: `${caseStudy.title.rendered.replace(/<[^>]*>/g, "")} | Aardish Infotech`,
    description,
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

  return (
    <>
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
                  featuredMedia?.alt_text ||
                  caseStudy.title.rendered.replace(/<[^>]*>/g, "")
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
