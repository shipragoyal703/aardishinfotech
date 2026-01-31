"use client";

import { useEffect, useRef } from "react";
import "@/styles/digital-partner.scss";

export default function DigitalPartner() {
  const countRef = useRef<HTMLSpanElement>(null);
  const countRef1 = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLInputElement>(null);

  /* COUNTER ANIMATION */
  useEffect(() => {
    const target = 76;
    const target1 = 984;
    const duration = 1500;

    let start = 0;
    let start1 = 0;

    const increment = target / (duration / 16);
    const increment1 = target1 / (duration / 16);

    function updateCounter() {
      start += increment;
      start1 += increment1;

      if (countRef.current) {
        countRef.current.textContent =
          start < target ? Math.floor(start).toString() : target.toString();
      }

      if (countRef1.current) {
        countRef1.current.textContent =
          start1 < target1 ? Math.floor(start1).toString() : target1.toString();
      }

      if (start < target || start1 < target1) {
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
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
                    <img src="/a-logo.png" />
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
                    <p>14 days trial</p>
                  </div>
                  <div className="left-col-2">
                    <div className="counter">
                      <span id="count">0</span><span className="plus">+</span>
                    </div>

                    <p>happy users</p>
                    <div className="image-stack">
                      <img src="/circle1.png" className="img img-1" alt="users" />
                      <img src="/circle2.png" className="img img-2" alt="users" />
                      <img src="/circle3.png" className="img img-3" alt="users" />
                    </div>

                  </div>
                  <div className="left-col-3">
                    <img src="/toggle.png" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-center-1">
                    <h3>Your Complete <br /> Digital Partner</h3>
                  </div>
                  <div className="middle">
                    <img src="/code.png" className="code" />
                    <img src="/circle.png" className="circle" />
                  </div>
                  <div className="col-center-2">
                    <div className="center1">
                      <div className="content">
                        <img src="/txt-2.png" />
                        <h3> End-to-End Services</h3>
                        <p> We build solutions that grow with your business.</p>
                      </div>

                    </div>

                    <div className="center2">
                      <div className="content">
                        <img src="/txt-3.png" />
                        <h3> Scalable & Future-Proof</h3>
                        <p> We build solutions that grow with your business.</p>
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
                      <span id="count1">0</span><span className="plus">+</span>
                    </div>

                    <img src="/Prompt.png" />
                  </div>
                  <div className="col-right-3">
                    <p>Industries Served </p>
                    <span>Startups • Enterprises • Nonprofits • Agencies • eCommerce</span>
                    <img src="/Frame.png" />
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

