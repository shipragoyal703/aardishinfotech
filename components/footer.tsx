import Image from "next/image";
import "@/styles/footer.scss";

export default function Footer({ menu }: { menu: any[] }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-sm-3">
          <div className="logo">
            <a href="/">
            <Image
              src="/logo.png"
              width={162}
              height={60}
              alt="Site Logo"
              priority
            />
            </a>
          </div>
        </div>

      <div className="col-sm-3">
        <h3>QUICK LINKS</h3>
        <nav>
          <ul>
            {menu?.map((item: any) => (
              <li key={item.id} className={item.classes}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        <div className="col-sm-3 contact">
            <h3>CONTACT</h3>
            <a href="mailto:info.aardishinfotech.com">info.aardishinfotech.com</a>
            <a href="tel:8054071080">8054071080</a>
            <p>Social Links</p>
            <ul>
                <li><a href="#">Twiter</a></li>
                  <li><a href="#">Twiter</a></li>
                    <li><a href="#">Twiter</a></li>
                      <li><a href="#">Twiter</a></li>
            </ul>
        </div>
        <div className="col-sm-3">
            <div className="newsletter">
                <h3>Sign Up to our Newsletter!</h3>
                <div className="form">
                    <form>
                        <div className="input-group">
                            <input type="email" placeholder="Email address" />
                            <button type="button">Book a Demo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-sm-12 copyright">
                <div className="col-sm-6">
                    <p>© AardshishInfotech 2026. All rights reserved</p>
                </div>
                <div className="col-sm-6">
                   <ul>
                    <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Terms & Conditions</a></li>
                   </ul>
                </div>
            
        </div>
        </div>
      </div>
    </footer>
  );
}
