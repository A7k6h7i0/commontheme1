import { useEffect, useRef } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export function Particles({ count = 50, className = "" }: ParticlesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 30}px`);
      el.style.setProperty("--my", `${y * 30}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const particles = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 3 + 1;
    const colors = ["var(--neon-cyan)", "var(--neon-violet)", "var(--neon-magenta)", "var(--neon-blue)"];
    return {
      id: i,
      size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      color: colors[i % colors.length],
      depth: Math.random() * 2 + 0.5,
    };
  });

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)", transition: "transform 0.4s ease-out" }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
