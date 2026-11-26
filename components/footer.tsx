
import Image from "next/image";
import Link from "next/link";
import "@/styles/footer.scss";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* COMPANY LOGO & DESCRIPTION */}
          <div className="col-sm-3">
            <div className="logo">
              <Link
                href="/"
                aria-label="Aardish Infotech homepage"
              >
                <Image
                  src="/aardish-logo.png"
                  width={162}
                  height={60}
                  alt="Aardish Infotech"
                />
              </Link>

              <p className="footer-info">
                Aardish Infotech is a full-service web development,
                UI/UX design, eCommerce, and SEO agency helping
                businesses worldwide build scalable digital experiences.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-sm-3 links">
            <h3>QUICK LINKS</h3>

            <nav aria-label="Company information">
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/how-it-works">How It Works</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="col-sm-3 contact">
            <h3>CONTACT</h3>

            <Link href="mailto:info@aardishinfotech.in">
              info@aardishinfotech.in
            </Link>

            <Link href="tel:+918054071080">
              +91 8054071080
            </Link>

            <p>Social Links</p>

            <ul aria-label="Social media links">
              <li>
                <Link
                  href="https://www.facebook.com/aardishinfotech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aardish Infotech on Facebook"
                >
                  <Image
                    src="/fb.png"
                    width={30}
                    height={30}
                    alt="Facebook"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/aardishinfotech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aardish Infotech on Instagram"
                >
                  <Image
                    src="/insta.png"
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/99796917/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aardish Infotech on LinkedIn"
                >
                  <Image
                    src="/linkdin.png"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-sm-3">
            <div className="newsletter">
              <h3>Sign Up to our Newsletter!</h3>

              <div className="form">
                <NewsletterForm />
              </div>
            </div>
          </div>

          {/* COPYRIGHT & LEGAL LINKS */}
          <div className="col-sm-12 copyright">
            <div className="col-md-6">
              <p>
                © Aardish Infotech {currentYear}. All rights reserved.
              </p>
            </div>

            <div className="col-md-6">
              <ul aria-label="Legal information">
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms-conditions">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
