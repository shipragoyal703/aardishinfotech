"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/header.scss";
import Popup from "./popup";
import Link from "next/link";

export default function Header({ menu }: { menu: any[] }) {
  const [menuOpen, setMenuOpen] = useState(false);   // ✅ menu
 

  return (
    <header className="header">
      <div className="container">
        <div className="row align-center">

          {/* LOGO */}
          <div className="col-sm-3">
            <div className="logo">
              <Link href="/">
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
                {menu?.map((item) => (
                  <li key={item.id} className={item.classes}>
                    <Link href={item.url} onClick={() => setMenuOpen(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}

                {/* ✅ Demo Button */}
                <li className="demo-button">
                  <Link href="/contact">
                   Get a free quote

                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          
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