"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/header.scss";
import Popup from "./popup";


export default function Header({ menu }: { menu: any[] }) {
  const [open, setOpen] = useState(false);

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
          <div className={`col-sm-9 nav-wrapper ${open ? "open" : ""}`}>
            <nav>
              <ul>
                {menu?.map((item: any) => (
                  <li key={item.id} className={item.classes}>
                    <a href={item.url} onClick={() => setOpen(false)}>
                      {item.title}
                    </a>
                  </li>
                ))}
                <li className="demo-button"> <button onClick={() => setOpen(true)}>
        Book a Demo
      </button></li>
              </ul>
            </nav>
          </div>


      <Popup open={open} onClose={() => setOpen(false)}>
        <h2>Get Connect with us</h2>
        
       <iframe
    src="http://aardishinfotech.local/contact/"
    width="100%"
    height="500"
    style={{ border: "0" }}
  />
      </Popup>
          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
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
