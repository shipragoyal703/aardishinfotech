"use client";

import { useState } from "react";
import "@/styles/portfolio.scss";

export const WORK_TABS = [
  {
    id: "Featured",
    label: "Featured",
    items: [
      {
        image: "/feature3.png"
      },
      {
        image: "/feature1.png"
      },
      {
        image: "/feature2.png"
      }
    ] 
  },
  {
    id: "Design",
    label: "UI/UX Design",
    items: [
      {
        image: "/design1.png",
      },
      {
        image: "/design2.png",
      },
      {
        image: "/design3.png",
      }
    ]
  },
  {
    id: "Development",
    label: "Web Development",
    items: [
      {
        image: "/custom1.png"
      },
      {
        image: "/custom2.png"
      },
      {
        image: "/custom3.png"
      }
    ]
  }
];

export default function Portfolio({ data }: any) {
  const [activeTab, setActiveTab] = useState(WORK_TABS[0].id);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const activeContent = WORK_TABS.find(tab => tab.id === activeTab);

  return (
    <section className="portfolio-sec">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-sm-12">
            <div className="tools-content">
              <span className="subheading">{data.work_subtitle}</span>
              <h3>
                {data.work_heading}{" "}
                <span>{data.work_purple_heading}</span>{" "}
                {data.work_white_heading}
              </h3>
              <p>{data.work_description}</p>
            </div>
          </div>
        </div>

        {/* Tabs Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="tabs-header">
              {WORK_TABS.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setHoveredIndex(0);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="row">
          <div className="col-sm-12">
            {activeContent && (
              <div className="hover-expand-sec">
                <div className="expand-wrapper">

                  {activeContent.items.map((item, index) => (
                    <div
                      key={index}
                      className={`expand-item ${
                        hoveredIndex === index ? "active" : ""
                      }`}
                      onMouseEnter={() => {
      if (window.innerWidth > 767) {
        setHoveredIndex(index);
      }
    }}
                      onMouseLeave={() => {
      if (window.innerWidth > 767) {
        setHoveredIndex(0);
      }
    }}
     onClick={() => {
      if (window.innerWidth <= 767) {
        setHoveredIndex(index);
      }
    }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="expand-img"
                      />

                      {hoveredIndex === index && (
                        <div className="work-column-text">
                          <h3 className="work-column-text-heading">
                            {item.heading}
                          </h3>
                          <p className="work-column-text-desc">
                            {item.title}
                          </p>
                          <p className="work-column-text-para">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
