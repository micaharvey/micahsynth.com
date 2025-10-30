import { useEffect, useRef } from "react";

export default function TabbyParallaxHeader() {
  const wrapRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (document.body.scrollHeight <= window.innerHeight) {
      // no scrolling possible, leave background static
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        const bg = bgRef.current;
        if (!el || !bg) return;

        // How far the header is from the top
        const { top, height } = el.getBoundingClientRect();
        // Parallax factor (tweak 0.25–0.5 to taste)
        const y = top * 0.25;

        // Translate the oversized background
        bg.style.transform = `translateY(${y}px)`;
      });
    };

    // run once and on scroll/resize
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      ref={wrapRef}
      style={{
        position: "relative",
        width: "100%",
        /* responsive height, never above 200px */
        height: "clamp(120px, 20vw, 200px)",
        overflow: "hidden",
        borderRadius: 12,
      }}
    >
      {/* Oversized background layer for smooth parallax (no cropping gaps) */}
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: "absolute",
          /* extend beyond edges so translating doesn’t reveal gaps */
          top: "-10%",
          left: "-2%",
          right: "-2%",
          bottom: "-10%",
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/TabbyTwitchBanner.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
          transform: "translateY(0px)",
          filter: "saturate(1.05)",
        }}
      />

      {/* Centered title (optional) */}
      <h2
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          margin: 0,
          color: "white",
          textShadow: `
            0 0 10px rgba(0,0,0,1),
            0 0 20px rgba(0,0,0,0.9),
            0 0 40px rgba(0,0,0,0.8)
          `,
          fontWeight: 700,
          letterSpacing: 0.5,
        }}
      >
        Micah Synth - Free music app for mobile and desktop
      </h2>
    </header>
  );
}
