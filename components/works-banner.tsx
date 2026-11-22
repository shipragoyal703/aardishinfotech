import Image from "next/image";
import "../styles/BannerAnimation.scss";
import "@/styles/banner.scss";
import ClientLogos from "./ClientLogos";

export default function WorksAnimation() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 banner-content">
              <span className="title-btn">OUR PROCESS & WORKFLOW</span>

              <h1>
               How We Turn Your Digital Vision Into a  
                <span> High-Performing Product</span>
              </h1>

              <p>
                Great digital products don’t happen by accident. Our transparent, sprint-based delivery framework eliminates guesswork, prevents scope creep, and delivers custom websites, eCommerce stores, and web applications 3X faster than traditional agencies—with full visibility at every milestone.
              </p>

              <div className="buttons">
                <a href="https://calendly.com/akshays103/15min?month=2026-11" target="_blank" className="primary-button">
                 Start Your Project
                </a>

                <a href="/contact#contactform" className="secondary-button">
                  Get a Free Quote
                </a>
              </div>
            </div>

            <div className="col-lg-5 banner-image">
              <div className="banner-animation works-banner">
                <div className="hero-animation">
                  <div className="scene">
                    <div className="mobile-img">
                      <Image src="/work-mobile.png"  width={300} height={300} alt="works image" />
                    </div>
                    <div className="hiw-graphic">
                      <div className="hiw-glow"></div>
                     
<svg
  className="hiw-process-path"
  viewBox="0 0 700 700"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient
      id="hiw-path-gradient"
      x1="0%"
      y1="100%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#663cff" />
      <stop offset="50%" stopColor="#b45cff" />
      <stop offset="100%" stopColor="#e27aff" />
    </linearGradient>
  </defs>

  <path
    d="M 100 520 C 35 430, 70 250, 190 180 C 310 105, 455 105, 565 175 C 665 240, 670 390, 580 480 C 490 570, 300 620, 165 550"
    fill="none"
    stroke="url(#hiw-path-gradient)"
    strokeWidth="5"
    strokeLinecap="round"
    strokeDasharray="12 12"
  />

  <path
    d="M 535 135 L 575 160 L 535 185"
    fill="none"
    stroke="#d27aff"
    strokeWidth="7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                      <span className="hiw-particle hiw-particle-1"></span>
                      <span className="hiw-particle hiw-particle-2"></span>
                      <span className="hiw-particle hiw-particle-3"></span>
                      <span className="hiw-particle hiw-particle-4"></span>
                      <span className="hiw-particle hiw-particle-5"></span>
                      <span className="hiw-particle hiw-particle-6"></span>
                      <div className="hiw-center">
                        <div className="hiw-sphere">
                          <div className="hiw-sphere-content">
                            <small>YOUR VISION</small>
                            <strong>
                              From Ideas to<span>Real Impact</span>
                            </strong>
                            <i></i>
                            <small>OUR PROCESS</small>
                          </div>
                        </div>
                        <div className="hiw-platform"></div>
                      </div>
                      <div className="hiw-step hiw-step-01">
                        <div className="hiw-step-icon">
                          <span>⌕</span>
                        </div>
                        <div className="hiw-step-content">
                          <div className="hiw-step-number">01</div>
                          <h3>Discover</h3>
                         
                        </div>
                      </div>
                      <div className="hiw-step hiw-step-02">
                        <div className="hiw-step-icon">
                          <span>☷</span>
                        </div>
                        <div className="hiw-step-content">
                          <div className="hiw-step-number">02</div>
                          <h3>Plan &amp; Strategize</h3>
                          
                        </div>
                      </div>
                      <div className="hiw-step hiw-step-03">
                        <div className="hiw-step-icon">
                          <span>&lt;/&gt;</span>
                        </div>
                        <div className="hiw-step-content">
                          <div className="hiw-step-number">03</div>
                          <h3>Design &amp; Develop</h3>
                         
                        </div>
                      </div>
                      <div className="hiw-step hiw-step-04">
                        <div className="hiw-step-icon">
                          <span>⚙</span>
                        </div>
                        <div className="hiw-step-content">
                          <div className="hiw-step-number">04</div>
                          <h3>Test &amp; Refine</h3>
                          
                        </div>
                      </div>
                      <div className="hiw-step hiw-step-05">
                        <div className="hiw-step-icon">
                          <span>↗</span>
                        </div>
                        <div className="hiw-step-content">
                          <div className="hiw-step-number">05</div>
                          <h3>Launch &amp; Grow</h3>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 trust-logos">
              <h3>Trusted by Startups, Agencies & Growing Global Brands</h3>
                         <p> We partner with ambitious businesses and agencies to deliver reliable, scalable, and results-driven digital solutions. </p>
                          <ClientLogos />
                        
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
