
"use client";

import { useState, useEffect } from "react";
import "@/styles/blogs.scss";
import "@/styles/testimonial.scss";

interface TestimonialData {
  testimonials?: string;
  testimonial_heading?: string;
  testimonial_heading_purple?: string;
  testimonial_heading_white?: string;
  testimonial_description?: string;

  [key: string]: string | number | boolean | null | undefined;
}

interface TestimonialItem {
  quote: string;
  image?: string;
  name: string;
  designation: string;
}

interface TestimonialProps {
  data: TestimonialData;
}

function buildTestimonials(
  acf: TestimonialData,
  count = 3
): TestimonialItem[] {
  const items: TestimonialItem[] = [];

  for (let i = 1; i <= count; i++) {
    const quote = acf[`testimonial_quote_${i}`];
    const image = acf[`testimonial_image_${i}`];
    const name = acf[`client_name_${i}`];
    const designation = acf[`client_designation_${i}`];

    const testimonialQuote = typeof quote === "string" ? quote : "";
    const testimonialImage = typeof image === "string" ? image : "";
    const clientName = typeof name === "string" ? name : "";
    const clientDesignation =
      typeof designation === "string" ? designation : "";

    if (
      testimonialQuote ||
      testimonialImage ||
      clientName ||
      clientDesignation
    ) {
      items.push({
        quote: testimonialQuote,
        image: testimonialImage,
        name: clientName,
        designation: clientDesignation,
      });
    }
  }

  return items;
}

export default function TestimonialSec({ data }: TestimonialProps) {
  const testimonials = buildTestimonials(data, 3);

  const [active, setActive] = useState(0);

  // Autoplay
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) =>
        prev >= testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="blog-section testimonial-section">
      <div className="container">
        <div className="row">
          {/* HEADING */}
          <div className="col-sm-12 blog-content">
            <span className="subheading">{data.testimonials}</span>

            <h3>
              {data.testimonial_heading}{" "}
              <span>{data.testimonial_heading_purple}</span>
              {data.testimonial_heading_white}
            </h3>

            <p>{data.testimonial_description}</p>
          </div>

          {/* SLIDER */}
          <div className="col-sm-12">
            <div className="testimonial-slider">
              {/* Slides */}
              <div className="testimonial-wrapper">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className={`testimonial-slide ${
                      active === index ? "active" : ""
                    }`}
                  >
                    <div className="testimonial-card">
                      <p className="testimonial-text">
                        {item.quote}
                      </p>

                      <div className="testimonial-user">
                        <h4>{item.name}</h4>
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DOTS */}
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={active === index ? "true" : undefined}
                    className={active === index ? "active" : ""}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
