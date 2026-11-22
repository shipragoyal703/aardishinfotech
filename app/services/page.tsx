import { fetchAPI } from "@/lib/api";
import Banner from "@/components/banner";
import ImageText from "@/components/image-with-text";
import DemoSection from "@/components/demo";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import Services from "@/components/services";
import Heading from "@/components/Heading";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Web Development, eCommerce & SEO Services | Aardish Infotech",
  description:
    "Explore end-to-end web development, eCommerce, custom software, UI/UX design, and technical SEO services from Aardish Infotech. Scalable digital solutions built for growth. Get a free quote.",
};




export default async function ServicesPage() {
  const page = await fetchAPI("/wp/v2/pages/22");

  return (
    <>
      <section className="about-section">
        <Banner data={page.acf} type="services" />
      </section>
   
    <section className="what-do-sec">
           <Heading />
           <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/custom-web.png" alt="Custom Website Development" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Custom Website <br />  Development</h3>
                              <p>Fast, responsive, and conversion-engineered websites tailored to your brand identity and business objectives.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/seo.png" alt="SEO" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Technical & Growth Search Engine Optimization (SEO)</h3>
                              <p>Capture high-intent organic search traffic, outrank competitors, and turn search visibility into qualified leads.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/ecom.webp" alt="eCommerce Solutions" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>eCommerce Website Development</h3>
                              <p>High-converting online stores engineered to maximize average order value, streamline checkout, and scale effortlessly.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/custom-web.png" alt="Web & Custom Application" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Web & Custom Application Development</h3>
                              <p>Bespoke web applications, SaaS platforms, and custom API integrations built to automate workflows.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/UI_UX.webp" alt="Professional UI/UX" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Professional UI/UX & <br /> Digital Design</h3>
                              <p>Intuitive, human-centered interfaces and scalable design systems that turn casual visitors into loyal customers.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/perform.webp" alt="Website Performance" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Website Performance & <br />Technical Support</h3>
                              <p>Proactive monitoring, speed optimization, and dedicated ongoing support to keep your digital platforms fast, secure, and online 24/7.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/mobile.png" alt="Mobile App Development" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>Mobile App <br /> Development</h3>
                              <p>We design and develop custom iOS and Android apps with intuitive interfaces and smooth performance.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                      <div className="service-box">
                          <div className="img">
                              <Image src="/cms.webp" alt="CMS Website Development" width={100} height={100} />
                          </div>
                          <div className="detail">
                              <h3>CMS Website <br /> Development</h3>
                              <p>We create flexible, responsive websites powered by content management systems like WordPress, Shopify, or custom CMS platforms.</p>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
    </section>
    <section className="process-section">
  <div className="process-container">
    <div className="process-intro">
      <span className="process-label">OUR PROCESS</span>

      <h2>
        A Clear Path From
        <span>Idea To Impact</span>
      </h2>

      <p>
        We follow a structured and collaborative process to ensure
        transparency, efficiency, and exceptional results.
      </p>

     
    </div>

    <div className="process-steps">
      <div className="process-step">
          <div className="step-number">01</div>
        <div className="step-top">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4h14v11H9l-4 4V4Z"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linejoin="round"
              />
              <path
                d="M8 8h8M8 11h5"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="step-line"></div>
        </div>

      

        <h3>Discover</h3>

        <p>
We learn about your business, audience, goals, and challenges to identify opportunities and define what success looks like for your project.        </p>
      </div>

      <div className="process-step">
          <div className="step-number">02</div>
        <div className="step-top">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18h6M10 21h4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M8.5 15.5C7.2 14.4 6.5 12.8 6.5 11a5.5 5.5 0 0 1 11 0c0 1.8-.7 3.4-2 4.5-.7.6-1 1.2-1.1 2H9.6c-.1-.8-.4-1.4-1.1-2Z"
                stroke="currentColor"
                stroke-width="1.8"
              />
            </svg>
          </div>

          <div className="step-line"></div>
        </div>

      

        <h3>Strategize</h3>

        <p>
We turn insights into action with a tailored strategy, clear project milestones, and the right technology to build a solution around your business needs.        </p>
      </div>

      <div className="process-step">
         <div className="step-number">03</div>
        <div className="step-top">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v3M12 18v3M3 12h3M18 12h3"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <rect
                x="7"
                y="7"
                width="10"
                height="10"
                rx="2"
                stroke="currentColor"
                stroke-width="1.8"
              />
            </svg>
          </div>

          <div className="step-line"></div>
        </div>

       

        <h3>Build</h3>

        <p>
Our team brings your vision to life through intuitive design, clean development, and scalable technology — creating digital experiences that engage users and drive results.

        </p>
      </div>

      <div className="process-step">
           <div className="step-number">04</div>
        <div className="step-top">
          <div className="step-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 13.5 12.5 5l2 2L6 15.5 4 16l.5-2.5Z"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linejoin="round"
              />
              <path
                d="m14.5 5 2.5-2.5M17 4l3 3"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M14 14c2.5.3 4.7 1.4 6 3.5-2.7 1.2-5.2 1.3-7.5.2"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

       

        <h3> Launch & Grow</h3>

        <p>
We take your solution live, monitor performance, and provide ongoing support and optimization to keep your digital presence secure, competitive, and ready to scale.        </p>
      </div>

    </div>
 <a href="https://calendly.com/akshays103/15min?month=2026-11" target="_blank" className="process-btn">
        Get Started
        <span>→</span>
      </a>
  </div>
</section>
  <section className="why-choose">
  <div className="why-container">


    <div className="why-content">

      <span className="section-tag">
        WHY CHOOSE US
      </span>

      <h2>
        Your Trusted Technology
        <span>Partner for Long-Term Success</span>
      </h2>

      <p className="why-description">
        We combine technical expertise, industry knowledge, and a
        client-first approach to deliver solutions that create
        real business value.
      </p>

      <div className="why-features">

  
        <div className="why-feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
              <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.7"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
            </svg>
          </div>

          <div>
            <h3>Client-Centric Approach</h3>
            <p>
              Your goals are our priority. We build solutions
              around your business needs.
            </p>
          </div>
        </div>

    
        <div className="why-feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-1.7 1.7-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21h-2.4v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-1.7-1.7.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.51-1H7v-2.4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06 1.7-1.7.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 .99-1.51V5h2.4v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06 1.7 1.7-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51.99H21v2.4h-.09A1.65 1.65 0 0 0 19.4 15Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path>
            </svg>
          </div>

          <div>
            <h3>Customized Solutions</h3>
            <p>
              Tailored strategies and technologies designed
              around your unique challenges.
            </p>
          </div>
        </div>

   
        <div className="why-feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 20V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              <path d="M12 20V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              <path d="M19 20v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>

          <div>
            <h3>Experienced Team</h3>
            <p>
              A skilled team with diverse expertise across
              modern technologies.
            </p>
          </div>
        </div>

    
        <div className="why-feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
              <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".5"></path>
            </svg>
          </div>

          <div>
            <h3>Focus on Results</h3>
            <p>
              We measure success by the impact we create
              for your business.
            </p>
          </div>
        </div>

      </div>
    </div>



    <div className="why-visual">

      <div className="visual-glow"></div>

      <div className="target-platform">

        <div className="target-circle target-outer"></div>
        <div className="target-circle target-middle"></div>
        <div className="target-circle target-inner"></div>

        <div className="target-center"></div>

        <div className="target-arrow">
          <span></span>
        </div>

      </div>




      <div className="floating-card card-strategy">
        <div className="floating-icon">✦</div>
        <span>Strategy</span>
      </div>

      <div className="floating-card card-tech">
        <div className="floating-icon">&lt;/&gt;</div>
        <span>Technology</span>
      </div>

      <div className="floating-card card-growth">
        <div className="floating-icon">▮▮▮</div>
        <span>Growth</span>
      </div>

      <div className="floating-card card-success">
        <div className="floating-icon">★</div>
        <span>Success</span>
      </div>

    </div>

  </div>
</section>

    
      <StatsCounter />
      <FourColumn />
      <DemoSection />
    </>
  );
}
