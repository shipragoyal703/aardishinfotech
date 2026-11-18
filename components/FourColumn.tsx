import Image from "next/image";

const values = [
{
    image: "/innovation.png",
    title: "Built for Speed, SEO & Accessibility",
    description:
      "A great website means nothing if customers can't find or use it. Every platform we build is engineered from day one for Google Core Web Vitals, technical SEO readiness, and 100% WCAG/ADA accessibility compliance.",
  },
  {
    image: "/collab.png",
    title: "True End-to-End Execution",
    description:
      "Stop juggling separate vendors for design, development, CRM integration, and search optimization. Our cross-functional team handles your entire digital lifecycle—from initial wireframes to post-launch scaling.",
  },
  {
    image: "/integrity.png",
    title: "Seamless Tech Stack Integration",
    description:
      "We connect your website and apps with 100+ essential business platforms—including HubSpot, Apollo, payment gateways, and marketing automation tools—so your operations run without friction.",
  },
  {
    image: "/excel.png",
    title: "Transparent Milestones & Post-Launch Support",
    description:
      "No black-box development or surprise delays. You get clear sprint updates, direct communication with your project team, and 14 days of complimentary post-launch technical support on every build.",
  },

];

export default function FourColumn() {
  return (
    <section className="values-section guide">
      <div className="container">
        <div className="section-heading">
          <span className="value">Why Partner With Us</span>
          <h2>
           THE AARDISH  <span>ADVANTAGE</span>
          </h2>
          <p>Why Growing Brands Choose Aardish Infotech</p>
        </div>

        <div className="row g-4">
          {values.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="value-card">
                <div className="icon">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}