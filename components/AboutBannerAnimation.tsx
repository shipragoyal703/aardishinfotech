
import Image from "next/image";
import "../styles/BannerAnimation.scss";
import "@/styles/banner.scss";
import Link from "next/link";
import ClientLogos from "./ClientLogos";

export default function AboutAnimation() {

  return (
    <>
     <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <span className="title-btn">ABOUT AARDISH INFOTECH</span>

            <h1>
            Engineering Scalable Digital Solutions for&nbsp;

               <span>Ambitious Businesses</span>
            </h1>

            <p>We are a full-service IT solutions, custom web development, and digital growth company helping startups, agencies, and enterprises turn complex ideas into high-performing digital products. From custom code to search engine dominance, we build technology that drives measurable revenue. </p>

            <div className="buttons">
              <Link href="https://calendly.com/akshays103/15min" className="primary-button" target="_blank">
              Book a Free Strategy Call
              </Link>

              <Link href="/case-studies" className="secondary-button">
               View Our Case Studies
              </Link>
            </div>
          </div>

          <div className="col-lg-5 banner-image">
             <div className="banner-animation">

  <div className="orbit orbit-1"></div>
  <div className="orbit orbit-2"></div>
  <div className="orbit orbit-3"></div>

  <div className="center-orb">
    <Image
      src="/Component 36.png"
      alt=""
      width={350}
      height={350}
    />
  </div>

  <div className="icon innovation">
      <Image src="/innovation.png" width={70} height={70} alt="" />
      <span>Innovation</span>
  </div>

  <div className="icon growth">
      <Image src="/excel.png" width={70} height={70} alt="" />
      <span>Growth</span>
  </div>

  <div className="icon security">
      <Image src="/integrity.png" width={70} height={70} alt="" />
      <span>Security</span>
  </div>

  <div className="icon collaboration">
      <Image src="/collab.png" width={70} height={70} alt="" />
      <span>Collaboration</span>
  </div>

</div>
          </div>

          <div className="col-sm-12 trust-logos">
            <h3>Trusted by Startups, Agencies & Growing Global Brands</h3>
            <p> We partner with ambitious businesses and agencies to deliver reliable, scalable, and results-driven digital solutions. </p>
             <ClientLogos />
           
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
}