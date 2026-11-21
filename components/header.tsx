
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };

   useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row align-center">

          {/* LOGO */}
          <div className="col-sm-3">
            <div className="logo">
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/logo.png"
                  width={162}
                  height={60}
                  alt="Site Logo"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* NAV */}
          <div className={`col-sm-9 nav-wrapper ${menuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link href="/about" onClick={closeMenu}>
                    About us
                  </Link>
                </li>

                <li>
                  <Link href="/services" onClick={closeMenu}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="/how-it-works" onClick={closeMenu}>
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link href="/case-studies" onClick={closeMenu}>
                    Case Studies
                  </Link>
                </li>

                <li>
                  <Link href="/blogs" onClick={closeMenu}>
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link href="/contact" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </li>

                {/* Demo Button */}
                <li className="demo-button">
                  <Link href="/contact#contactform" onClick={closeMenu}>
                    Get a free quote
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </header>
  );
}
