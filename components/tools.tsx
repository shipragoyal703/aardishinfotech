"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/tools.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Tools({ data }: any) {
  const row1 = buildRow(data, "platform", "platform", 5);
  const row2 = buildRow(data, "platform_row_2", "platform_row2", 5);

  return (
    <section className="tools-section">
      <div className="container">
        <div className="tools-content">
          <span className="subheading">{data.tools_subheading}</span>
          <h3>
            {data.tools_heading} <span>{data.tools_heading_purple}</span>
          </h3>
          <p>{data.tools_description}</p>
        </div>

        {/* LEFT → RIGHT */}
        <div className="marquee">
          <Slider {...settings}>
            {row1.map((item, i) => (
              <SlideItem key={`row1-${i}`} item={item} />
            ))}
          </Slider>
        </div>

        {/* RIGHT → LEFT */}
        <div className="marquee reverse">
          <Slider {...settings} rtl>
            {row2.map((item, i) => (
              <SlideItem key={`row2-${i}`} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SlideItem({ item }: any) {
  return (
    <div className="tool-card">
      <img src={item.image.url} alt={item.name} />
      <span>{item.name}</span>
    </div>
  );
}

function buildRow(
  acf: any,
  imagePrefix: string,
  namePrefix: string,
  count = 5
) {
  const items: any[] = [];

  for (let i = 1; i <= count; i++) {
    const image = acf[`${imagePrefix}_image_${i}`];
    const name = acf[`${namePrefix}_name_${i}`];

    if (image?.url) {
      items.push({ image, name });
    }
  }

  // 👇 duplicate ONCE for seamless loop
  return [...items, ...items];
}

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 12000,
  cssEase: "linear",
  slidesToShow: 5,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  swipe: false,
  touchMove: false,

  responsive: [
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
