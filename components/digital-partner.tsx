"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "@/styles/digital-partner.scss";
import Image from "next/image";

export default function DigitalPartner() {
  const countRef = useRef<HTMLSpanElement>(null);
  const countRef1 = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);

  /* COUNTER ANIMATION */
  useEffect(() => {
  const duration = 1800;

  function animateCounter(
    ref: React.RefObject<HTMLSpanElement | null>,
    start: number,
    end: number
  ) {
    let startTime: number | null = null;

    function update(currentTime: number) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const value = Math.floor(
        start + (end - start) * progress
      );

      if (ref.current) {
        ref.current.textContent = value.toString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Happy Users: 1 → 76
  animateCounter(countRef, 1, 76);

  // Development Hours: 0 → 984
  animateCounter(countRef1, 0, 984);

}, []);

  /* IMAGE STACK ANIMATION */
  useEffect(() => {
    const stack = document.querySelector(".image-stack");
    if (!stack) return;

    const interval = setInterval(() => {
      stack.classList.toggle("open");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /* AUTO TOGGLE SWITCH */
  useEffect(() => {
    const interval = setInterval(() => {
      if (toggleRef.current) {
        toggleRef.current.checked = !toggleRef.current.checked;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="partner-sec">
        <div className="container">
          <div className="row">
            <div className="partner-outer">
              <div className="row">
                <div className="col-lg-3">
                  <div className="left-col-1">
                    <Image src="/a-logo.png" alt="logo"   width={53} height={47} /> 
                    <h2 className="text-rotate">
                      Effortless Digital
                      <span className="word-wrapper">
                        <span className="words">
                          <span>Solutions</span>
                          <span>Experience</span>
                          <span>Products</span>
                        </span>
                      </span>
                    </h2>
                    <p>14 days post-launch support</p>
                  </div>
                  <div className="left-col-2">
                    <div className="counter">
                    <span ref={countRef}>1</span>
                    <span className="plus">+</span>
                  </div>

                    <p>Happy Clients <br /> World Wide</p>
                    <div className="image-stack">
                      <Image src="/circle1.png" className="img img-1" alt="users"  width={62} height={62}  /> 
                      <Image src="/circle2.png" className="img img-2" alt="users"  width={62} height={62}  /> 
                      <Image src="/circle3.png" className="img img-3" alt="users"  width={62} height={62}  /> 
                    </div>

                  </div>
                  <div className="left-col-3">
                    <Link href="/contact#contactform"><Image src="/toggle.png" alt="toggle"  width={182} height={54} /></Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-center-1">
                    <h3>Your Complete <br /> Digital Partner</h3>
                  </div>
                  <div className="middle">
                    <Image src="/code.png" className="code" alt="code"  width={374} height={374}  /> 
                    <Image src="/circle.png" className="circle" alt="circle"  width={271} height={271} /> 
                  </div>
                  <div className="col-center-2">
                    <div className="center1">
                      <div className="content">
                        <Image src="/txt-2.png" alt="end to end"  width={232} height={66}  /> 
                        <h3> End-to-End Services</h3>
                        <p> Unified strategy, design, development, and SEO under one roof.</p>
                      </div>

                    </div>

                    <div className="center2">
                      <div className="content">
                        <Image  src="/txt-3.png" alt="scalable"  width={232} height={66}  />
                        <h3> Scalable & Future-Proof Architecture</h3>
                        <p> Built on modern tech stacks that grow effortlessly alongside your business.</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-3">
                  <div className="col-right-1">
                    <label className="auto-toggle">
                      <input ref={toggleRef} type="checkbox" />
                      <span className="slider"></span>
                    </label>


                  </div>
                  <div className="col-right-2">
                    <div className="counter">
                      <span ref={countRef1}>0</span>
                      <span className="plus">+</span>
                    </div>

                    <Image src="/Prompt-img.png" alt="Prompt"  width={196} height={34} /> 
                  </div>
                  <div className="col-right-3">
                    <p>Industries We Serve </p>
                    <span>Startups • Enterprises Organization •  Nonprofits • Agencies • eCommerce brands</span>
                    <Image src="/Frame.png" alt="Industries"  width={196} height={196}  /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

