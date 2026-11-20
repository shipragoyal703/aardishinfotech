
import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";

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

export const dynamic = "force-dynamic";

async function getPrivacyPolicy(): Promise<WordPressPage | null> {
  try {
    const pages = await fetchAPI(
      "/wp/v2/pages?slug=privacy-policy"
    );

    if (!Array.isArray(pages) || pages.length === 0) {
      console.error("Privacy Policy page not found in WordPress");
      return null;
    }

    return pages[0];
  } catch (error) {
    console.error("Privacy Policy API Error:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPrivacyPolicy();

  return {
    title: "Privacy Policy | Aardish Infotech",
    description:
      "Read the Privacy Policy of Aardish Infotech to understand how we collect, use, and protect your personal information.",
    alternates: {
      canonical: "https://aardishinfotech.in/privacy-policy/",
    },
  };
}

export default async function PrivacyPolicyPage() {
  const page = await getPrivacyPolicy();

  return (
    <main className="legalPage">
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
