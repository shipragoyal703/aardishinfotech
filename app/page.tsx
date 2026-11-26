import { fetchAPI } from "@/lib/api";
import Banner from "@/components/banner";
import Services from "@/components/services";
import DemoSection from "@/components/demo";
import Tools from "@/components/tools";
import Blog from "@/components/blog";
import TestimonialSec from "@/components/testimonials";
import Portfolio from "@/components/portfolio";
import DigitalPartner from "@/components/digital-partner";
import JsonLd from "@/components/JsonLd";

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aardishinfotech.in/#organization",
      "name": "Aardish Infotech",
      "url": "https://aardishinfotech.in/",
      "description":
        "A digital technology company providing website development, eCommerce, UI/UX design, mobile applications and SEO services.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aardishinfotech.in/logo.png"
      },
      "email": "info@aardishinfotech.in",
      "telephone": "+91-8054071080",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/aardishinfotech/",
        "https://www.instagram.com/aardishinfotech/",
        "https://www.linkedin.com/company/aardish-infotech"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aardishinfotech.in/#website",
      "url": "https://aardishinfotech.in/",
      "name": "Aardish Infotech",
      "publisher": {
        "@id": "https://aardishinfotech.in/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
};

export default async function HomePage() {
  const [page, posts] = await Promise.all([
    fetchAPI("/wp/v2/pages/2"),
    fetchAPI("/wp/v2/posts?_embed&per_page=3"),
  ]);

  return (
    <>
     <JsonLd data={businessSchema} />
      <Banner data={page.acf} />
      <Services data={page.acf} />
      <Portfolio data={page.acf} />
      <DigitalPartner />
      <TestimonialSec data={page.acf} />
      <Tools data={page.acf} />
      <Blog data={page.acf} posts={posts} />
      <DemoSection />
    </>
  );
}