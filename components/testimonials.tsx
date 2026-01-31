"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/blogs.scss";
import "@/styles/testimonial.scss";

export default function TestimonialSec({ data }: any) {
    const testimonials = buildTestimonials(data, 3);
    const settings = {
        dots:true,
        arrows:false,
        infinite:true,
        speed:800,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
  return (
    <section className="blog-section testimonial-section">
      <div className="container">
        <div className="row">

          <div className="col-sm-12 blog-content">
            <span className="subheading">{data.testimonials}</span>
            <h3>
              {data.testimonial_heading}{" "}
              <span>{data.testimonial_heading_purple}</span>{data.testimonial_heading_white}
            </h3>
            <p>{data.testimonial_description}</p>
          </div>
          <div className="col-sm-12">
            <Slider {...settings} className="testimonial-slider">
                {testimonials.map((item: any, index: number) => (
                     <div key={index}>
                  <div className="testimonial-card">
                    <p className="testimonial-text">
                      {item.quote}
                    </p>

                    <div className="testimonial-user">
                      {item.image?.url && (
                        <img
                          src={item.image.url}
                          alt={item.image.alt || item.name}
                        />
                      )}

                      <h4>{item.name}</h4>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
              </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

function buildTestimonials(acf: any, count = 3){
    const items = [];
    for(let i=1; i<=count; i++){
        const quote = acf[`testimonial_quote_${i}`];
        const image = acf[`testimonial_image_${i}`];
        const name = acf[`client_name_${i}`];
        const designation = acf[`client_designation_${i}`];

        if(quote || image || name || designation){
            items.push({
                quote,
                image,
                name,
                designation
            });
        }

    }
    return items;
}