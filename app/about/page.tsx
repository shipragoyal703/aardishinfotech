import type { Metadata } from "next";
import ImageText from "@/components/image-with-text";
import DemoSection from "@/components/demo";
import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import Teams from "@/components/teams";
import AboutBanner from "@/components/AboutBannerAnimation";
import JsonLd from "@/components/JsonLd";


export const metadata: Metadata = {
  title: "About Aardish Infotech | Web & Software Development Team",
  description:
    "Discover Aardish Infotech, your digital growth partner for custom web development, eCommerce, UI/UX design, and technical SEO solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aardish Infotech | Web & Software Development",
    description:
      "Meet the team behind Aardish Infotech and discover our expertise in web development, eCommerce, UI/UX, and SEO.",
    url: "https://aardishinfotech.in/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://aardishinfotech.in/about#webpage",
  "url": "https://aardishinfotech.in/about",
  "name": "About Aardish Infotech | Web & Software Development Team",
  "description":
    "Discover Aardish Infotech, your digital growth partner for custom web development, eCommerce, UI/UX design, and technical SEO solutions.",
  "isPartOf": {
    "@id": "https://aardishinfotech.in/#website"
  },
  "about": {
    "@id": "https://aardishinfotech.in/#organization"
  },
  "mainEntity": {
    "@id": "https://aardishinfotech.in/#organization"
  },
  "inLanguage": "en-IN"
};


export default async function AboutPage() {
  return (
    <>
       <JsonLd data={aboutSchema} />

      <section className="about-section"> 
    
<AboutBanner />
      </section>
      <ImageText />
            <Teams />
      <StatsCounter />
      <FourColumn />

      <DemoSection />
    </>
  );
}
