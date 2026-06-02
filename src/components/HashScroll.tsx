"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return null;
}
