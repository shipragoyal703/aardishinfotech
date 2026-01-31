import { fetchAPI } from "@/lib/api";
import Banner from "@/components/banner";

export default async function AboutPage() {

  const page = await fetchAPI("/wp/v2/pages/41");


  return (
    <>
     
      <section className="about-section">
       hello 
       
      </section>
    </>
  );
}
