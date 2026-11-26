
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

interface WordPressPage {
  id: number;
  slug: string;
  modified: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}



async function getPrivacyPolicy(): Promise<WordPressPage | null> {
  try {
    const pages = await fetchAPI("/wp/v2/pages?slug=privacy-policy");

    if (!Array.isArray(pages) || pages.length === 0) {
      console.error("Privacy Policy page not found in WordPress");
      return null;
    }

    return pages[0] as WordPressPage;
  } catch (error) {
    console.error("Privacy Policy API Error:", error);
    return null;
  }
}

export function generateMetadata(): Metadata {
  return {
    title: "Privacy Policy | Aardish Infotech",
    description:
      "Read the Privacy Policy of Aardish Infotech to understand how we collect, use, and protect your personal information.",
    alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Aardish Infotech",
    description:
      "Read the Aardish Infotech Privacy Policy to understand how we handle and protect your personal information.",
    url: "https://aardishinfotech.in/privacy-policy",
    type: "website",
  },
  };
}


export default async function PrivacyPolicyPage() {
  const page = await getPrivacyPolicy();

  const pageTitle = page?.title.rendered
    ? page.title.rendered.replace(/<[^>]*>/g, "").trim()
    : "Privacy Policy | Aardish Infotech";

  const canonicalUrl =
    "https://aardishinfotech.in/privacy-policy";

  const privacySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description":
          "Read the Privacy Policy of Aardish Infotech to understand how we collect, use, and protect your personal information.",
        "isPartOf": {
          "@id": "https://aardishinfotech.in/#website"
        },
        "about": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        "mainEntity": {
          "@id": `${canonicalUrl}#policy`
        },
        ...(page?.modified && {
          "dateModified": page.modified
        }),
        "inLanguage": "en-IN"
      },
      {
        "@type": "DigitalDocument",
        "@id": `${canonicalUrl}#policy`,
        "name": pageTitle,
        "url": canonicalUrl,
        "description":
          "The Privacy Policy of Aardish Infotech explains how personal information is collected, used, and protected.",
        "publisher": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        ...(page?.modified && {
          "dateModified": page.modified
        }),
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <main className="legalPage">
      <JsonLd data={privacySchema} />

      <div className="container">
        {page ? (
          <>
            <div className="legalPageHeader">
              <h1
                dangerouslySetInnerHTML={{
                  __html: page.title.rendered,
                }}
              />

              <p>
                Last Updated:{" "}
                {new Date(page.modified).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div
              className="legalPageContent"
              dangerouslySetInnerHTML={{
                __html: page.content.rendered,
              }}
            />
          </>
        ) : (
          <div className="legalPageError">
            <h1>Privacy Policy</h1>
            <p>
              Unable to load the Privacy Policy. Please try again later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
