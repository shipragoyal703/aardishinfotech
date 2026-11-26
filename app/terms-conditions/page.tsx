import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aardish Infotech",
  description:
    "Read the Terms and Conditions of Aardish Infotech to understand the terms of using our website, digital services, and business offerings.",
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Aardish Infotech",
    description:
      "Review the terms and conditions governing the use of Aardish Infotech's website and digital services.",
    url: "https://aardishinfotech.in/terms-conditions",
    type: "website",
  },
};


async function getTermsConditions() {
  try {
    const pages = await fetchAPI(
      "/wp/v2/pages?slug=terms-conditions"
    );

    return pages?.length ? pages[0] : null;
  } catch (error) {
    console.error("Terms Conditions Fetch Error:", error);
    return null;
  }
}


export default async function TermsConditionsPage() {
  const page = await getTermsConditions();

  if (!page) {
    notFound();
  }

  const canonicalUrl =
    "https://aardishinfotech.in/terms-conditions";

  const pageTitle = page.title.rendered
    .replace(/<[^>]*>/g, "")
    .trim();

  const termsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description":
          "Read the Terms and Conditions of Aardish Infotech to understand the terms of using our website, digital services, and business offerings.",
        "isPartOf": {
          "@id": "https://aardishinfotech.in/#website"
        },
        "about": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        "mainEntity": {
          "@id": `${canonicalUrl}#terms`
        },
        ...(page.modified && {
          "dateModified": page.modified
        }),
        "inLanguage": "en-IN"
      },
      {
        "@type": "DigitalDocument",
        "@id": `${canonicalUrl}#terms`,
        "name": pageTitle,
        "url": canonicalUrl,
        "description":
          "The Terms and Conditions governing the use of Aardish Infotech's website and digital services.",
        "publisher": {
          "@id": "https://aardishinfotech.in/#organization"
        },
        ...(page.modified && {
          "dateModified": page.modified
        }),
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <main className="legalPage">
      <JsonLd data={termsSchema} />

      <div className="container">
        <h1
          dangerouslySetInnerHTML={{
            __html: page.title.rendered,
          }}
        />

        <div
          className="legalPageContent"
          dangerouslySetInnerHTML={{
            __html: page.content.rendered,
          }}
        />
      </div>
    </main>
  );
}
