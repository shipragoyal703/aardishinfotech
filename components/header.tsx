"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/header.scss";
import Popup from "./popup";

export default function Header({ menu }: { menu: any[] }) {
  const [menuOpen, setMenuOpen] = useState(false);   // ✅ menu
  const [popupOpen, setPopupOpen] = useState(false); // ✅ popup

  return (
    <header className="header">
      <div className="container">
        <div className="row align-center">

          {/* LOGO */}
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

          {/* NAV */}
          <div className={`col-sm-9 nav-wrapper ${menuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {menu?.map((item: any) => (
                  <li key={item.id} className={item.classes}>
                    <a href={item.url} onClick={() => setMenuOpen(false)}>
                      {item.title}
                    </a>
                  </li>
                ))}

                {/* ✅ Demo Button */}
                <li className="demo-button">
                  <button onClick={() => setPopupOpen(true)}>
                    Book a Demo
                  </button>
                </li>

              </ul>
            </nav>
          </div>

          {/* ✅ POPUP */}
          <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
            <h2>Get Connect with us</h2>

            <iframe
              src="https://wordpress.aardishinfotech.in/contact"
              width="100%"
              height="500"
              style={{ border: "0" }}
            />
          </Popup>

          {/* ✅ HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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