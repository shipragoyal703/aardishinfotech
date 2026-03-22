 import "@/styles/banner.scss";


export default function Banner({ data }: any) {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7  banner-content">
            <span className="title-btn">{data.banner_subtitle}</span>
            <h1>{data.banner_title}<span>{data.banner_highlight_text}</span></h1>
            <p>{data.banner_text}</p>
            <div className="buttons">
              <a href={data.demo_link} className="primary-button">Learn More</a>
               <a href={data.demo_link} className="secondary-button">Get Started</a>
            </div>
          </div>

          <div className="col-lg-5 banner-image">
            <img
              src={data.banner_image?.url}
              alt="banner-img"
            />
          </div>
          <div className="col-sm-12 trust-logos">
            <h3>{data.trust_logos}</h3>
            <img src={data.logo_images
?.url} alt="trust-logos" />
          </div>
        </div>
      </div>
    </section>
  );
}
