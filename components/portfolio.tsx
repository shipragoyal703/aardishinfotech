
"use client";

import { useState } from "react";
import "@/styles/portfolio.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/ui/Button"

interface PortfolioData {
  work_subtitle?: string;
  work_heading?: string;
  work_purple_heading?: string;
  work_white_heading?: string;
  work_description?: string;
}

interface PortfolioItem {
  image: string;
  portfolio: string;
  heading?: string;
  title?: string;
  description?: string;
}

interface WorkTab {
  id: string;
  label: string;
  items: PortfolioItem[];
}

interface PortfolioProps {
  data: PortfolioData;
}

export const WORK_TABS: WorkTab[] = [
  {
    id: "Featured",
    label: "Featured",
    items: [
      { image: "/feature3.png", portfolio: "https://margaretspeaks.com/" },
      {
        image: "/feature1.png",
        portfolio: "https://providencefinancehub.com.au/",
      },
      { image: "/feature2.png", portfolio: "https://sipped.shop/" },
    ],
  },
  {
    id: "Design",
    label: "UI/UX Design",
    items: [
      { image: "/design1.png", portfolio: "https://abbott22.com/" },
      { image: "/design2.png", portfolio: "https://wetatiacademy.org/" },
      { image: "/design3.png", portfolio: "https://www.home-stretch.com/" },
    ],
  },
  {
    id: "Development",
    label: "Web Development",
    items: [
      { image: "/custom1.png", portfolio: "#" },
      { image: "/custom2.png", portfolio: "https://flintgroup.au/" },
      { image: "/custom3.png", portfolio: "https://www.eventogy.com/" },
    ],
  },
];

export default function Portfolio({ data }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState(WORK_TABS[0].id);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeContent = WORK_TABS.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section className="portfolio-sec">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-sm-12">
            <div className="tools-content">
              <span className="subheading">
                {data.work_subtitle}
              </span>

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
              {WORK_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
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
                      key={`${activeContent.id}-${index}`}
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
                      <Link
                        href={item.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.image}
                          alt={item.title || "Portfolio project"}
                          className="expand-img"
                            width={800}
  height={600}
                        />
                      </Link>

                      {/* Optional Text Content */}
                      {hoveredIndex === index &&
                        (item.heading ||
                          item.title ||
                          item.description) && (
                          <div className="work-column-text">
                            {item.heading && (
                              <h3 className="work-column-text-heading">
                                {item.heading}
                              </h3>
                            )}

                            {item.title && (
                              <p className="work-column-text-desc">
                                {item.title}
                              </p>
                            )}

                            {item.description && (
                              <p className="work-column-text-para">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                    </div>
                  ))}
                </div>

                <Button variant = "primary"
                  className="secondary-button process-btn"
                  rel="noopener noreferrer"
                  href="/case-studies"
                >
                  View All Case Studies <span>→</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
