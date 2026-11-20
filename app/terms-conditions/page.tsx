
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";

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

  return (
    <main className="legalPage">
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
