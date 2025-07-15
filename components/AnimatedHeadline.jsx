"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedHeadline({ text }) {
  const headlineRef = useRef();

  useEffect(() => {
    const chars = headlineRef.current.querySelectorAll(".char");

    const tl = gsap.timeline({ paused: true });

    tl.from(chars, {
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
      stagger: { from: "center", each: 0.04 },
    }).from(
      headlineRef.current.querySelectorAll(".word"),
      {
        duration: 3,
        y: (i) => i * 100 - 50,
        ease: "expo",
      },
      0
    );

    tl.play();

    // Optional: replay on click
    const handleReplay = () => tl.play(0);
    window.addEventListener("click", handleReplay);

    return () => {
      window.removeEventListener("click", handleReplay);
    };
  }, []);

  // Split text into words and characters
  const renderText = () => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block overflow-hidden mr-2">
        {word.split("").map((char, j) => (
          <span key={j} className="char inline-block">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div
      ref={headlineRef}
      className="headline text-center text-black font-bold text-5xl md:text-7xl"
    >
      {renderText()}
    </div>
  );
}
