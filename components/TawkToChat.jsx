
"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (window.Tawk_API || document.getElementById("tawk-script")) {
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");

    script.id = "tawk-script";
    script.async = true;

    // Replace with your actual Property ID and Widget ID
    script.src = "https://embed.tawk.to/6b090f7009249f3d046e49ef/1k8dm8kun";

    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Keep the widget alive across Next.js navigation.
      // Do not remove the script during component cleanup.
    };
  }, []);

  return null;
}

