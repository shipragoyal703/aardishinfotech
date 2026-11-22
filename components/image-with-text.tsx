import Image from "next/image";

export default function ImageText() {
  return (
    <>
      <section className="image-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <span className="subheading">WHO WE ARE</span>
                <h3>
                 Bridging the Gap Between Technical Excellence and  <span>Business Growth</span>
                </h3>
                <p>
                  Aardish Infotech was founded to eliminate the compromise. We bring strategy, UI/UX design, full-stack web and application development, eCommerce engineering, and technical SEO together under one roof. Whether you are launching an MVP, replatforming a high-volume eCommerce store, or automating workflows with custom API integrations, we act as your dedicated technical partner—focused relentlessly on speed, accessibility, and bottom-line results.
                </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-img">
                <Image
                  src="/about-us.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> 
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="right-sec">
                
                <div className="our-mission">
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/mission.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Mission</h3>
                      <p>
                        To deliver innvovative, reliable and scalable digital
                        solutions that empower businesses to grow and make an
                        impact.
                      </p>
                    </div>
                  </div>
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/vision.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Vision</h3>
                      <p>
                        To be a global leader in digital innovation, known for excellence, integrity and creating meaningful change.
                      </p>
                    </div>
                  </div>
                  <div className="mission">
                    <div className="img">
                      <Image
                        src="/value.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="text">
                      <h3>Our Promise</h3>
                      <p>
                        We are committed to quality, transparency and partnership at every step of your digital journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 