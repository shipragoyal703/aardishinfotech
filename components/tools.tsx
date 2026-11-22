
"use client";

import "@/styles/tools.scss";
import Image from "next/image";

interface ToolImage {
  url: string;
  alt?: string;
}

interface ToolItem {
  image: ToolImage;
  name: string;
}

interface ToolsData {
  tools_subheading?: string;
  tools_heading?: string;
  tools_heading_purple?: string;
  tools_description?: string;
  [key: string]: string | ToolImage | null | undefined;
}

interface ToolsProps {
  data: ToolsData;
}

interface SlideItemProps {
  item: ToolItem;
}

export default function Tools({ data }: ToolsProps) {
  const row1 = buildRow(data, "platform", "platform", 7);
  const row2 = buildRow(data, "platform_row_2", "platform_row2", 7);

  return (
    <section className="tools-section">
      <div className="container">
        {/* HEADING */}
        <div className="tools-content">
          <span className="subheading">{data.tools_subheading}</span>

          <h3>
            {data.tools_heading}{" "}
            <span>{data.tools_heading_purple}</span>
          </h3>

          <p>{data.tools_description}</p>
        </div>

        {/* LEFT → RIGHT */}
        <div className="marquee">
          <div className="marquee-track">
            {row1.map((item, i) => (
              <SlideItem key={`row1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* RIGHT → LEFT */}
        <div className="marquee reverse">
          <div className="marquee-track">
            {row2.map((item, i) => (
              <SlideItem key={`row2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Slide Card */
function SlideItem({ item }: SlideItemProps) {
  return (
    <div className="tool-card">
      <Image src={item.image.url} alt={item.image.alt || item.name}  width={300} height={300}  />
      <span>{item.name}</span>
    </div>
  );
}

/* ACF Data Builder */
function buildRow(
  acf: ToolsData,
  imagePrefix: string,
  namePrefix: string,
  count = 7
): ToolItem[] {
  const items: ToolItem[] = [];

  for (let i = 1; i <= count; i++) {
    const imageValue = acf[`${imagePrefix}_image_${i}`];
    const nameValue = acf[`${namePrefix}_name_${i}`];

    if (
      typeof imageValue === "object" &&
      imageValue !== null &&
      "url" in imageValue &&
      typeof imageValue.url === "string" &&
      imageValue.url
    ) {
      items.push({
        image: {
          url: imageValue.url,
          alt:
            "alt" in imageValue && typeof imageValue.alt === "string"
              ? imageValue.alt
              : undefined,
        },
        name: typeof nameValue === "string" ? nameValue : "",
      });
    }
  }

  // Duplicate for seamless infinite loop
  return [...items, ...items];
}
