"use client";

import "@/styles/services.scss";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";

interface ServiceImage {
  url: string;
  alt?: string;
}

interface ServiceData {
  [key: string]: string | ServiceImage | null | undefined;
}

interface ServiceItem {
  title: string;
  description: string;
  image?: ServiceImage | null;
  animationImage?: ServiceImage | null;
}

interface ServicesProps {
  data: ServiceData;
}

function getServiceImage(value: unknown): ServiceImage | null {
  if (
    typeof value === "object" &&
    value !== null &&
    "url" in value &&
    typeof value.url === "string"
  ) {
    return {
      url: value.url,
      alt:
        "alt" in value && typeof value.alt === "string" ? value.alt : undefined,
    };
  }

  return null;
}

function buildServices(acf: ServiceData, count: number): ServiceItem[] {
  const items: ServiceItem[] = [];

  for (let i = 1; i <= count; i++) {
    const titleValue = acf[`service_title_${i}`];
    const descriptionValue = acf[`service_description_${i}`];

    const title = typeof titleValue === "string" ? titleValue : "";
    const description =
      typeof descriptionValue === "string" ? descriptionValue : "";

    const image = getServiceImage(acf[`service_image_${i}`]);
    const animationImage = getServiceImage(acf[`service_image_${i}_animation`]);

    if (title || description || image) {
      items.push({
        title,
        description,
        image,
        animationImage,
      });
    }
  }

  return items;
}

export default function Services({ data }: ServicesProps) {
  const [active, setActive] = useState(0);

  const services = useMemo(() => buildServices(data, 6), [data]);

  // Store accordion element references
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track whether the change came from a user click
  const shouldScroll = useRef(false);

  const handleClick = (index: number) => {
    shouldScroll.current = true;
    setActive(index);
  };

  // Scroll selected accordion into view on mobile
  useEffect(() => {
    if (!shouldScroll.current) return;

    shouldScroll.current = false;

    if (window.innerWidth <= 991) {
      const selectedItem = accordionRefs.current[active];

      if (selectedItem) {
        requestAnimationFrame(() => {
          selectedItem.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  }, [active]);

  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-sm-12 main-heading">
            <span className="subheading">{data.service_sub_title as string}</span>

            <h4
              className="title-txt"
              dangerouslySetInnerHTML={{
                __html: (data.service_title as string) || "",
              }}
            />

            <p className="description">
              {data.service_description_text as string}
            </p>
          </div>

          {/* Services Content */}
          <div className="col-sm-12">
            <div className="service-slider">
              <div className="plateform-slider row">
                {/* Left Accordion */}
                <div className="col-lg-6 slide-accordian">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        accordionRefs.current[index] = el;
                      }}
                      className={`accordian-item ${
                        active === index ? "active open-default" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      {/* Accordion Title */}
                      <div className="accordian-toggle-btn">
                        <div className="accordian-title">{item.title}</div>
                      </div>

                      {/* Active Content */}
                      {active === index && (
                        <>
                          {/* Description */}
                          <div
                            className="accordian-txt"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />

                          {/* Mobile Image */}
                          {/* Mobile Image */}
                          <div className="mobile-service-image">
                            <div className="animation-img-wrap animate">
                              {item.animationImage?.url ? (
                                <Image
                                  src={item.animationImage.url}
                                  alt={`${item.title} animation`}
                                  className="animation-main-img"
                                  width={800}
                                  height={600}
                                  unoptimized
                                />
                              ) : item.image?.url ? (
                                <Image
                                  src={item.image.url}
                                  alt={item.image.alt || item.title}
                                  className="animation-main-img"
                                  width={800}
                                  height={600}
                                  loading="lazy"
                                />
                              ) : null}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Desktop Right Image Slider */}
                {/* Desktop Right Image Slider */}
                <div className="col-lg-6 accordian-slider-img">
                  <div className="slider-wrapper">
                    <div
                      className="slider-track"
                      style={{
                        transform: `translateX(-${active * 100}%)`,
                      }}
                    >
                      {services.map((item, index) => (
                        <div key={index} className="slide">
                          <div
                            className={`animation-img-wrap ${
                              active === index ? "animate" : ""
                            }`}
                          >
                            {item.image?.url && (
                              <Image
                                src={item.image.url}
                                alt={item.image.alt || item.title}
                                className="animation-main-img"
                                width={800}
                                height={600}
                                loading="lazy"
                              />
                            )}

                            {item.animationImage?.url && (
                              <Image
                                src={item.animationImage.url}
                                alt={`${item.title} animation`}
                                className="animation-hover-img"
                                width={800}
                                height={600}
                                unoptimized
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
