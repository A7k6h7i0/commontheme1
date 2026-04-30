import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;
    let active = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };

    const tick = () => {
      if (!active) return;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      active = false;
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full hidden md:block"
        style={{ background: "var(--neon-cyan)", boxShadow: "0 0 14px var(--neon-cyan)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99] h-9 w-9 rounded-full border hidden md:block"
        style={{
          borderColor: "oklch(0.7 0.22 255 / 0.5)",
          boxShadow:
            "0 0 22px oklch(0.7 0.22 255 / 0.4), inset 0 0 14px oklch(0.7 0.22 255 / 0.25)",
          transition: "width .25s, height .25s",
        }}
      />
    </>
  );
}
