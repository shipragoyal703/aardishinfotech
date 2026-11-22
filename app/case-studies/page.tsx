
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";

export const metadata: Metadata = {
  title: "Case Studies | Aardish Infotech",
  description:
    "Explore our case studies and discover how Aardish Infotech helps businesses build effective digital solutions.",
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

export default async function CaseStudiesPage() {
  const caseStudies = (await fetchAPI(
    "/wp/v2/case-study?per_page=12&_embed"
  )) as WordPressCaseStudy[];

  return (
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
                            caseStudy.title.rendered.replace(/<[^>]*>/g, "")
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
  );
}
