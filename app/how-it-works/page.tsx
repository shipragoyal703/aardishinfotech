

import DemoSection from "@/components/demo";

import StatsCounter from "@/components/StatsCounter";
import FourColumn from "@/components/FourColumn";
import WorksBanner from "@/components/works-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Agile Web Development & Digital Process — Aardish Infotech",
  description:
    "See how Aardish Infotech takes your project from discovery and UI/UX design to custom web development, SEO, and launch with 3X faster turnarounds and 14 days of free support.",
};

export default async function WorksPage() {
  

  return (
    <>
      <section className="about-section">
        <WorksBanner />
      </section>
      <section className="process-detail">
        <div className="process-detail-container">
          <div className="process-heading">
            <span className="section-tag">STEP-BY-STEP EXECUTION</span>

            <h2>
              From Initial Idea to Scalable Launch in <span>5 Clear Steps</span>
            </h2>

            <p>
              Whether we are building a custom WordPress or Next.js website, launching a Shopify/WooCommerce store, or executing a technical SEO overhaul, every engagement follows our structured, milestone-driven workflow.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-item process-left">
              <div className="process-card">
                <span className="process-card-label">Timeline: Days 1–3</span>

                <h3>Discovery, Audit & Technical Strategy</h3>

                <p>
                 Every successful build starts with clarity. We hop on a focused strategy session to understand your business goals, target audience, competitors, and functional requirements. If you have an existing site, we audit its technical SEO, page speed, and conversion bottlenecks.
                </p>

                <ul>
                  <li>Detailed Project Scope & Sitemap Architecture</li>
                  <li>Recommended Tech Stack & Integration Blueprint</li>
                  <li>Fixed-Milestone Timeline & Transparent Quote</li>
                </ul>
                <br />
                <p><b>Your Involvement: </b>One 30–45 minute discovery call and sharing brand assets/access.</p>
              </div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="6.5"
                      stroke="currentColor"
                      stroke-width="2"
                    />

                    <path
                      d="M16 16l5 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div></div>
            </div>

            <div className="process-item process-right">
              <div></div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />

                    <path
                      d="M8 7h8"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />

                    <path
                      d="m8 12 1.5 1.5L12 11"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="M8 16h6"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="process-card">
                <span className="process-card-label">Timeline: Days 4–10</span>

                <h3>Wireframing & Conversion-Focused UI/UX Design</h3>

                <p>
                Before writing a single line of production code, our UI/UX designers map out intuitive user journeys and craft interactive, mobile-first visual designs tailored to your brand identity. You see exactly how your website or application will look, feel, and convert across desktop and mobile devices.
                </p>

                <ul>
                  <li>Wireframing & Conversion-Focused UI/UX Design</li>
                  <li>High-Fidelity UI Designs & Interactive Figma Prototypes</li>
                  <li>Mobile-First & WCAG/ADA Accessibility Design Standards</li>
                </ul>
                <br />
                <p><b>Your Involvement:</b> Review the interactive prototype and share consolidated feedback before sign-off.</p>
              </div>
            </div>

            <div className="process-item process-left">
              <div className="process-card">
                <span className="process-card-label">Weeks 2–4 (varies by project scope)</span>

                <h3>Agile Full-Stack Development & Third-Party Integrations</h3>

                <p>
                  Once designs are approved, our engineers bring them to life with clean, semantic, and scalable code. You get access to a private staging link so you can watch progress in real time. During this phase, we also configure your CMS, set up eCommerce payment/shipping flows, and connect CRMs or marketing tools (like HubSpot, Apollo, Stripe, or custom APIs).
                </p>

                <ul>
                  <li>Live Private Staging Environment for Real-Time Previews</li>
                  <li>Clean, Modular Frontend & Backend Codebase</li>
                  <li>CRM, Payment Gateway, Analytics & API Integrations</li>
                  <li>On-Page Technical SEO Structure & Schema Markup Setup</li>
                </ul>
                <br />
                <p><b>Your Involvement: </b>Weekly sprint check-ins and staging link reviews.</p>
              </div>
              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="m8 8-4 4 4 4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m16 8 4 4-4 4"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m14 5-4 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div></div>
            </div>

            <div className="process-item process-right">
              <div></div>

              <div className="process-node">
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 13.5 13.5 4c1.8-.5 4.5.2 6.5 2.2s2.7 4.7 2.2 6.5L12.7 22l-2.2-5.5L5 14.3 4 13.5Z"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linejoin="round"
                    />

                    <path
                      d="m5 14 4-4"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />

                    <circle
                      cx="16.5"
                      cy="7.5"
                      r="1.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="process-card">
                <span className="process-card-label">QA Before Launch and + 14 Days Complimentary Support</span>

                <h3>QA, Speed & Post-Launch Support</h3>

                <p>
                Nothing goes live without passing our multi-point pre-launch checklist. We handle DNS cutover, live server deployment, and Google Search Console / GA4 verification with zero downtime. You receive full administrative ownership of your code, accounts, and assets—plus personalized walkthrough training so your team can manage day-to-day content effortlessly.
                </p>

                <ul>
                  <li>Cross-Browser & Multi-Device Responsiveness Verification</li>
                  <li>Core Web Vitals & Page Speed Optimization Report</li>
                  <li>14 Days of Complimentary Post-Launch Technical Support</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="expect-section">
  <div className="expect-container">

    <div className="expect-header">
      <span className="dark-section-tag">NO BLACK-BOX DEVELOPMENT</span>

      <h2>
       How We Keep Your Project on Track and&nbsp;<span>Stress-Free</span>
      </h2>

      <p>
        You work directly with a dedicated project lead—no endless ticket queues or getting lost in translation between sales and engineering.
      </p>
    </div>


    <div className="expect-grid">
  <div className="expect-card">
        <div className="expect-icon">01</div>
        <h3>Dedicated Point of Contact</h3>
        <p>
         You work directly with a dedicated project lead—no endless ticket queues or getting lost in translation between sales and engineering.
        </p>
      </div>
      <div className="expect-card">
        <div className="expect-icon">02</div>
        <h3>Real-Time Staging Access</h3>
        <p>
          Track every milestone via a live private staging URL from week one, so there are never surprises on launch day.
        </p>
      </div>

      <div className="expect-card">
        <div className="expect-icon">03</div>
        <h3>100% Code & Asset Ownership</h3>
        <p>
         Everything we design and build belongs entirely to you upon completion—no proprietary lock-ins or hidden licensing traps.
        </p>
      </div>

      <div className="expect-card">
        <div className="expect-icon">04</div>
        <h3>Predictable Milestones & Pricing</h3>
        <p>
         Every project is broken into clear, agreed-upon milestones with transparent deliverables and zero surprise billing.
        </p>
      </div>

    

    </div>

  </div>
</section>

<section className="collaboration-section">
  <div className="collaboration-container">

    <div className="collaboration-content">

      <span className="section-tag">
        QUICK ONBOARDING
      </span>

      <h2>
       Ready to Kick Off? Here’s All&nbsp;
        <span>It Takes to Begin</span>
      </h2>

      <p>
      You don’t need a 50-page technical specification document to start working with us. To launch your project, we simply need:
      </p>

      <div className="collaboration-points">

        <div className="collaboration-point">
          <span>✓</span>
          <div className="collaboration-text">
            <strong>Your Core Objectives</strong>
            <small>
             A brief overview of what you want to build, redesign, or optimize—and the business results you want to achieve.
            </small>
          </div>
        </div>

        <div className="collaboration-point">
          <span>✓</span>
          <div className="collaboration-text">
            <strong>Brand & Content Assets</strong>
            <small>
              Any existing logos, brand guidelines, copy, or product details (need help with copywriting or branding? Our team can handle that too).
            </small>
          </div>
        </div>

        <div className="collaboration-point">
          <span>✓</span>
          <div className="collaboration-text">
            <strong>Reference Examples: </strong>
            <small>
             2–3 websites or apps whose design, speed, or functionality you admire.
            </small>
          </div>
        </div>

          <div className="collaboration-point">
          <span>✓</span>
          <div className="collaboration-text">
            <strong>Your Target Timeline:</strong>
            <small>
             Any upcoming product launches, marketing campaigns, or key deadlines we should plan around.
            </small>
          </div>
        </div>

      </div>

    </div>


    <div className="collaboration-visual">

      <div className="collaboration-orbit orbit-one"></div>
      <div className="collaboration-orbit orbit-two"></div>

      <div className="collaboration-center">
        <span>YOU</span>
        <strong>+</strong>
        <span>US</span>
      </div>

      <div className="collab-node node-one">
        Strategy
      </div>

      <div className="collab-node node-two">
        Design
      </div>

      <div className="collab-node node-three">
        Development
      </div>

      <div className="collab-node node-four">
        Feedback
      </div>

    </div>

  </div>
</section>
      <StatsCounter />
      <FourColumn />

      <DemoSection />
    </>
  );
}
