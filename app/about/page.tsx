import type { Metadata } from "next";
import ImageText from "@/components/image-with-text";
import DemoSection from "@/components/demo";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import Teams from "@/components/teams";
import AboutBanner from "@/components/AboutBannerAnimation";

export const metadata: Metadata = {
  title: "About Aardish Infotech | Custom Software, Web & SEO Solutions Team",
  description:
    "Learn how Aardish Infotech helps startups, agencies, and global brands scale through custom web development, eCommerce, UI/UX design, and technical SEO. Meet your digital growth partner.",
};

export default async function AboutPage() {


  return (
    <>
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
