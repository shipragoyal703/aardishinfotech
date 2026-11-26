import Image from "next/image";
import "@/styles/footer.scss";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-sm-3">
          <div className="logo">
            <Link href="/">
            <Image
              src="/aardish-logo.png"
              width={162}
              height={60}
              alt="Site Logo"
              priority
            />
            </Link>
            <p className="footer-info">Aardish Infotech is a full-service web development, UI/UX design, eCommerce, and SEO agency helping businesses worldwide build scalable digital experiences.</p>
          </div>
        </div>

      <div className="col-sm-3 links">
        <h3>QUICK LINKS</h3>
        <nav>
          <ul>
             <li><Link href="/about">About Us</Link></li>
                 <li><Link href="/services">Services </Link></li>
                  <li><Link href="/how-it-works">How It Works</Link></li>
                    <li><Link href="/contact">Contact Us </Link></li>
          </ul>
        </nav>
        </div>
        <div className="col-sm-3 contact">
            <h3>CONTACT</h3>
            <Link href="mailto:info@aardishinfotech.in">info@aardishinfotech.in</Link>
            <Link href="tel:8054071080">+91 8054071080</Link>
            <p>Social Links</p>
            <ul>
                <li><Link href="https://www.facebook.com/aardishinfotech/" target="_blank">
              <Image
              src="/fb.png"
              width={30}
              height={30}
              alt="facebook"
            />
            </Link></li>
                 
                    <li><Link href="https://www.instagram.com/aardishinfotech/" target="_blank"><Image
              src="/insta.png"
              width={30}
              height={30}
              alt="instagram"
            /></Link></li>
                      <li><Link href="https://www.linkedin.com/company/99796917/" target="_blank"><Image
              src="/linkdin.png"
              width={24}
              height={24}
              alt="linkdin"
            /></Link></li>
            </ul>
        </div>
        <div className="col-sm-3">
            <div className="newsletter">
                <h3>Sign Up to our Newsletter!</h3>
                <div className="form">
  <NewsletterForm />
</div>
            </div>
        </div>
        <div className="col-sm-12 copyright">
                <div className="col-md-6">
                    <p>© Aardish Infotech 2026. All rights reserved</p>
                </div>
                <div className="col-md-6">
                   <ul>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                     <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                   </ul>
                </div>
            
        </div>
        </div>
      </div>
    </footer>
  );
}
