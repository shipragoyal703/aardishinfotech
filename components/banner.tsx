
import "@/styles/banner.scss";
import BannerAnimation from "@/components/BannerAnimation";
import AboutAnimation from "@/components/AboutBannerAnimation";
import ServiceAnimation from "./ServiceBanner";
import WorksAnimation from "./works-banner";
import ClientLogos from "@/components/ClientLogos";
import Button from "@/components/ui/Button";

interface BannerData {
  banner_subtitle?: string;
  banner_title?: string;
  banner_highlight_text?: string;
  banner_text?: string;
  demo_link?: string;
  demo_link_text?: string;
  get_started?: string;
  get_started_text?: string;
  trust_logos?: string;
  banner_logo_text?: string;
}

interface BannerProps {
  data: BannerData;
  type?: "home" | "about" | "services" | "works";
}

export default function Banner({
  data,
  type = "home",
}: BannerProps) {
  const renderAnimation = () => {
    switch (type) {
      case "about":
        return <AboutAnimation />;

      case "services":
        return <ServiceAnimation />;

      case "works":
        return <WorksAnimation />;

      case "home":
      default:
        return <BannerAnimation />;
    }
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <span className="title-btn">{data.banner_subtitle}</span>

            <h1>
              {data.banner_title}
              <span>{data.banner_highlight_text}</span>
            </h1>

            <div className="banner-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.banner_text ?? "",
                }}
              />
            </div>

            {/* Reusable Buttons */}
            <div className="buttons">
              {data.demo_link && data.demo_link_text && (
                <Button
                  href={data.demo_link}
                  variant="primary"
                  target="_blank"
                >
                  {data.demo_link_text}
                </Button>
              )}

              {data.get_started && data.get_started_text && (
                <Button
                  href={data.get_started}
                  variant="secondary"
                >
                  {data.get_started_text}
                </Button>
              )}
            </div>
          </div>

          <div className="col-lg-5 banner-image">
            {renderAnimation()}
          </div>

          <div className="col-sm-12 trust-logos">
            <h3>{data.trust_logos}</h3>
            <p>{data.banner_logo_text}</p>
            <ClientLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
