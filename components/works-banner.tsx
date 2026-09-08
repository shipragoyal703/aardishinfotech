
import Image from "next/image";
import "../styles/BannerAnimation.scss";
import "@/styles/banner.scss";

export default function WorksAnimation() {

  return (
    <>
     <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 banner-content">
            <span className="title-btn">How it Works</span>

            <h1>
             Our Proven Process Built 
              <span>Around You</span>
            </h1>

            <p>We follow a clear, collaborative process to deliver digital solutions that drive real results.</p>

            <div className="buttons">
              <a href="/" className="primary-button">
              Get Demo
              </a>

              <a href="/" className="secondary-button">
                get started
              </a>
            </div>
          </div>

          <div className="col-lg-5 banner-image">
            <div className="banner-animation works-banner">
        <div className="hero-animation">

    <div className="scene">

      <div className="hiw-graphic">

  {/* Background Glow */}
  <div className="hiw-glow"></div>

  {/* Orbit Rings */}
  <div className="hiw-orbit hiw-orbit-large"></div>
  <div className="hiw-orbit hiw-orbit-medium"></div>
  <div className="hiw-orbit hiw-orbit-small"></div>

  {/* Workflow Path */}
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
      d="M 100 520
         C 35 430, 70 250, 190 180
         C 310 105, 455 105, 565 175
         C 665 240, 670 390, 580 480
         C 490 570, 300 620, 165 550"
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


  {/* Floating Particles */}
  <span className="hiw-particle hiw-particle-1"></span>
  <span className="hiw-particle hiw-particle-2"></span>
  <span className="hiw-particle hiw-particle-3"></span>
  <span className="hiw-particle hiw-particle-4"></span>
  <span className="hiw-particle hiw-particle-5"></span>
  <span className="hiw-particle hiw-particle-6"></span>


  {/* Center */}
  <div className="hiw-center">

    {/* Globe */}
    <div className="hiw-sphere">

      <div className="hiw-sphere-inner"></div>

      <div className="hiw-sphere-ring hiw-sphere-ring-1"></div>
      <div className="hiw-sphere-ring hiw-sphere-ring-2"></div>
      <div className="hiw-sphere-ring hiw-sphere-ring-3"></div>

      <div className="hiw-sphere-content">

        <small>YOUR VISION</small>

        <strong>
          From Ideas to
          <span>Real Impact</span>
        </strong>

        <i></i>

        <small>OUR PROCESS</small>

      </div>

    </div>

    {/* Platform */}
    <div className="hiw-platform"></div>

  </div>


  {/* Step 01 */}
  <div className="hiw-step hiw-step-01">

    <div className="hiw-step-icon">
      <span>⌕</span>
    </div>

    <div className="hiw-step-content">

      <div className="hiw-step-number">
        01
      </div>

      <h3>
        Discover
      </h3>

      <p>
        Understand your goals,
        challenges and opportunities.
      </p>

    </div>

  </div>


  {/* Step 02 */}
  <div className="hiw-step hiw-step-02">

    <div className="hiw-step-icon">
      <span>☷</span>
    </div>

    <div className="hiw-step-content">

      <div className="hiw-step-number">
        02
      </div>

      <h3>
        Plan & Strategize
      </h3>

      <p>
        Define goals and create
        a tailored roadmap.
      </p>

    </div>

  </div>


  {/* Step 03 */}
  <div className="hiw-step hiw-step-03">

    <div className="hiw-step-icon">
      <span>&lt;/&gt;</span>
    </div>

    <div className="hiw-step-content">

      <div className="hiw-step-number">
        03
      </div>

      <h3>
        Design & Develop
      </h3>

      <p>
        Build tailored solutions
        with modern technology.
      </p>

    </div>

  </div>


  {/* Step 04 */}
  <div className="hiw-step hiw-step-04">

    <div className="hiw-step-icon">
      <span>⚙</span>
    </div>

    <div className="hiw-step-content">

      <div className="hiw-step-number">
        04
      </div>

      <h3>
        Test & Refine
      </h3>

      <p>
        Ensure quality, performance
        and a seamless experience.
      </p>

    </div>

  </div>


  {/* Step 05 */}
  <div className="hiw-step hiw-step-05">

    <div className="hiw-step-icon">
      <span>↗</span>
    </div>

    <div className="hiw-step-content">

      <div className="hiw-step-number">
        05
      </div>

      <h3>
        Launch & Grow
      </h3>

      <p>
        Deliver results and support
        your long-term growth.
      </p>

    </div>

  </div>

</div>
    </div>

</div>
    </div>
          </div>

          <div className="col-sm-12 trust-logos">
            <h3></h3>
            <img src="/logos.webp" alt="trust-logos" />
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}