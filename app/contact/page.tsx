
import DemoSection from "@/components/demo";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Aardish Infotech | Discuss Your Project With Us",
  description:
    "Get in touch with Aardish Infotech for website development, custom software, WordPress, Shopify, UI/UX design, and SEO services. Let's discuss your project.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aardish Infotech | Let's Build Something Great",
    description:
      "Have a project in mind? Contact Aardish Infotech to discuss your web development, software, eCommerce, and digital marketing requirements.",
    url: "https://aardishinfotech.in/contact",
    type: "website",
  },
};


const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://aardishinfotech.in/contact#webpage",
      "url": "https://aardishinfotech.in/contact",
      "name": "Contact Aardish Infotech",
      "description":
        "Get in touch with Aardish Infotech for website development, custom software, WordPress, Shopify, UI/UX design, and SEO services.",
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
    },
    {
      "@type": "Organization",
      "@id": "https://aardishinfotech.in/#organization",
      "name": "Aardish Infotech",
      "url": "https://aardishinfotech.in",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "@id": "https://aardishinfotech.in/contact#contactpoint",
          "contactType": "Sales and project enquiries",
          "email": "info@aardishinfotech.in",
          "telephone": "+91-8054071080",
          "url": "https://aardishinfotech.in/contact",
          "availableLanguage": "English"
        }
      ]
    }
  ]
};


export default function ContactPage() {
  return (
    <>
          <JsonLd data={contactSchema} />

      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-content">
            <div className="section-label">
              CONTACT US
            </div>

            <h1>
              Let’s Build Something
              <span>Extraordinary Together</span>
            </h1>

            <p className="contact-description">
              Whether you are launching a new product, scaling an eCommerce store, or modernizing a legacy platform, our team is ready to turn your goals into high-performing digital reality.
            </p>

            <div className="contact-options">
              <div className="contact-option">
                <div className="option-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 11.5a8 8 0 0 1-8 8c-1.4 0-2.7-.36-3.85-1L4 20l1.5-3.3A7.94 7.94 0 0 1 4 11.5a8 8 0 1 1 16 0Z" />
                    <circle cx="8" cy="11.5" r=".8" />
                    <circle cx="12" cy="11.5" r=".8" />
                    <circle cx="16" cy="11.5" r=".8" />
                  </svg>
                </div>

                <div>
                  <strong>Ask</strong>
                  <span>Technical & scope questions</span>
                </div>
              </div>

              <div className="contact-option">
                <div className="option-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="8" r="2.5" />
                    <path d="M3 19c0-3.2 2.6-5.5 6-5.5s6 2.3 6 5.5" />
                    <path d="M14 14c3.1-.3 6 1.6 6 4.5" />
                  </svg>
                </div>

                <div>
                  <strong>Discuss</strong>
                  <span>Your project roadmap</span>
                </div>
              </div>

              <div className="contact-option">
                <div className="option-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9.5 15.5h5" />
                    <path d="M10 18h4" />
                    <path d="M9 12.5c-1.2-.9-2-2.4-2-4.1a5 5 0 0 1 10 0c0 1.7-.8 3.2-2 4.1-.7.5-1 1.1-1 2H10c0-.9-.3-1.5-1-2Z" />
                    <path d="M12 2v1" />
                    <path d="m4.9 4.9.7.7" />
                    <path d="M3 8.5h1" />
                    <path d="m19.1 4.9-.7.7" />
                    <path d="M21 8.5h-1" />
                  </svg>
                </div>

                <div>
                  <strong>Explore</strong>
                  <span>Partnership opportunities</span>
                </div>
              </div>

              <div className="contact-option">
                <div className="option-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="m21 3-18 8 7 2 2 7 9-17Z" />
                    <path d="M10 13 21 3" />
                  </svg>
                </div>

                <div>
                  <strong>Get</strong>
                  <span>Actionable expert advice</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT VISUAL */}
          <div className="contact-visual">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>

            <div className="glow-orb">
              <div className="center-orb">
                <Image
                  src="/Component 36.png"
                  alt=""
                  width={350}
                  height={350}
                />
              </div>
            </div>

            <div className="connect-card">
              <div>Let’s</div>
              <div>Connect</div>
              <span></span>
            </div>

            <div className="floating-icon email-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>

            <div className="floating-icon phone-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6.5 3.5 9 3l2 5-2.5 1.8a14 14 0 0 0 5.2 5.2l1.8-2.5 5 2 .5 2.5c.2 1-.6 2-1.6 2C12.5 19 5 11.5 5 4.6c0-1 .5-1.9 1.5-1.1Z" />
              </svg>
            </div>

            <div className="floating-icon location-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="contact-options">
        <div className="contact-options-container">
          <div className="contact-section-heading">
            <span className="subheading">
              LET&apos;S TALK
            </span>

            <h2>
              Have A Project In Mind?
              <span>Let&apos;s Make It Happen.</span>
            </h2>

            <p>
           Whether you have a detailed technical brief or just an early concept, reach out through whichever channel works best for you.
            </p>
          </div>

          <div className="contact-options-grid">
            {/* EMAIL */}
            <div className="contact-option-card">
              <div className="contact-option-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span>Email Us</span>
                <h3><Link href="mailto:info@aardishinfotech.in">info@aardishinfotech.in</Link></h3>
                <p>Send over your brief, RFP, or questions—we respond within 24 business hours.</p>
              </div>

             
            </div>

            {/* PHONE */}
            <div className="contact-option-card">
              <div className="contact-option-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 3h3.1l1.5 5-2 1.7a14.4 14.4 0 0 0 5.1 5.1l1.7-2 5 1.5v3.1c0 1.1-.9 2-2 2C11.3 19.4 4.6 12.7 4.6 5c0-1.1.9-2 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <span>Call Us</span>
                <h3><Link href="tel:+91 8054071080">+91 8054071080</Link></h3>
                <p>Speak directly with our technical team to discuss timelines and requirements.</p>
              </div>

             
            </div>

            {/* BOOK A CALL */}
            <div className="contact-option-card">
              <div className="contact-option-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="17"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M7 2v4M17 2v4M3 9h18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 13h3M8 17h6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <span>Book A Call</span>

                <h3>
                  <Link
                    href="https://calendly.com/akshays103/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free Consultation
                  </Link>
                </h3>

                <p>Pick a time that fits your timezone to walk through your goals live.</p>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section" id="contactform">
        <div className="contact-form-container">
          <div className="contact-form-intro">
            <span className="subheading">
              GET IN TOUCH
            </span>

            <h2>
              Tell Us About Your 
              <span>Next Move.</span>
            </h2>

            <p>
              Share a few details about your project, timeline, and business objectives. A senior strategist will review your note and follow up with clear next steps.
            </p>

            <div className="contact-benefits">
              <div>
                <span>✓</span>
                <p>Complimentary 30-minute discovery consultation</p>
              </div>

              <div>
                <span>✓</span>
                <p>Tailored tech stack, timeline & budget recommendations</p>
              </div>

              <div>
                <span>✓</span>
                <p>100% confidential & zero-obligation discussion</p>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <iframe
              title="Aardish Infotech contact enquiry form"
              width="540"
              height="800"
              src="https://63f587da.sibforms.com/v2/serve/MUIFAPsSRe-C865hLIhoqKZ0CYWnef38BaH5uOdiMwGs9jXAAKkcFKALRmmictacj2pWn6Fdkbxzyq7RrdviAqpcHeNwCfvgbPNeLuXnl6jTJ7FZ-secAbF3RTDG-r43UZHPqcPL7OmIY8oIT1d_Ncrw3sJfUrDjUp1o_J5edYLC_GPXvRflIaed3_qNamVUQnZbchRkdvIDui3GnQ=="
              style={{
                width: "100%",
                maxWidth: "540px",
                border: 0,
              }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="next-section">
        <div className="next-container">
          <div className="next-heading">
            <span className="subheading">
              WHAT HAPPENS NEXT
            </span>

            <h2>
              Transparent From First 
              <span>Hello to Launch</span>
            </h2>

            <p>
             No guesswork or long waiting periods—here is exactly what happens once you hit submit.
            </p>
          </div>

          <div className="next-steps">
            <div className="next-step">
              <div className="next-icon">
                <span>01</span>
              </div>

              <h3>We Listen</h3>

              <p>
                We review your inquiry carefully to understand your business model, target audience, and technical requirements.
              </p>
            </div>

            <div className="next-line"></div>

            <div className="next-step">
              <div className="next-icon">
                <span>02</span>
              </div>

              <h3>We Strategize</h3>

              <p>
                On a quick discovery call, we align on the right architecture, platform (WordPress, Shopify, React, or Next.js), and milestones.
              </p>
            </div>

            <div className="next-line"></div>

            <div className="next-step">
              <div className="next-icon">
                <span>03</span>
              </div>

              <h3>We Propose</h3>

              <p>
                ou receive a clear, itemized roadmap with realistic delivery timelines and transparent pricing—no hidden surprises.
              </p>
            </div>

            <div className="next-line"></div>

            <div className="next-step">
              <div className="next-icon">
                <span>04</span>
              </div>

              <h3>We Build & Launch</h3>

              <p>
                Once approved, our designers and engineers get to work with weekly progress updates until your product goes live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="faq-container">
          <div className="faq-heading">
            <span className="subheading">
              FAQ
            </span>

            <h2>
              Questions?
              <span>We&apos;ve Got Answers.</span>
            </h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>
                How much does a typical website or web application cost?
                <span>+</span>
              </summary>

              <p>
                Every project is scoped around your exact goals, features, and complexity rather than rigid cookie-cutter tiers. After our free discovery call, we provide a transparent, itemized proposal with fixed milestone pricing so you know the exact investment upfront.
              </p>
            </details>

            <details>
              <summary>
               How long does it take to build and launch a project?
                <span>+</span>
              </summary>

              <p>
                A custom marketing website or Shopify store typically takes 2 to 4 weeks, while larger custom web applications (React, Next.js, or PHP) generally take 6 to 12 weeks depending on integrations and feedback turnaround. We share a clear week-by-week delivery schedule before writing a single line of code.
              </p>
            </details>

            <details>
              <summary>
                What information should I prepare before reaching out?
                <span>+</span>
              </summary>

              <p>
                You don’t need a 50-page technical spec to start. A quick summary of your business goals, examples of websites or features you like, your target launch window, and an approximate budget range are more than enough for our first conversation.
              </p>
            </details>

            <details>
              <summary>
               Do you really offer a free consultation?
                <span>+</span>
              </summary>

              <p>
                Yes. Your initial strategy call is completely free and comes with zero obligation. We use it to understand your goals and share honest recommendations on the best approach.
              </p>
            </details>

            <details>
              <summary>
               What types of projects do you specialize in?
                <span>+</span>
              </summary>

              <p>
               We design, build, and optimize custom websites, high-converting Shopify and WooCommerce stores, full-stack web applications (PHP, React, Next.js), and technical SEO campaigns for startups and growing businesses worldwide.
              </p>
            </details>

           
            
          </div>
        </div>
      </section>

      <DemoSection />
    </>
  );
}
