"use client";
// GsapStep3.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function GsapStep3() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        scale: 0.5,
        opacity: 0,
        y: 50,
        transformOrigin: "center center",
      },
      {
        scale: 1.5,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      cardRef.current.firstChild,
      {
        scale: 0.5,
        opacity: 0,

        x: 100,
        transformOrigin: "center center",
      },
      {
        scale: 1.5,
        opacity: 1,

        x: 0,
        duration: 1,
        delay: 0.5,
        ease:"power4.inOut",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div
        ref={cardRef}
        className="w-64 opacity-0 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"
      >
        <h1 className="text-white text-start p-2 tex-3xl">Hello</h1>
      </div>
    </div>
  );
}
