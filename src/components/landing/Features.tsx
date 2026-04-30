import { motion } from "framer-motion";
import type { MouseEvent } from "react";

const features = [
  {
    title: "Neural Compose",
    desc: "Generate, refactor and animate UI with multi-modal models that understand your design system.",
    icon: "✦",
    color: "var(--neon-cyan)",
  },
  {
    title: "Holo Render",
    desc: "GPU-accelerated rendering pipeline ships 120 fps interfaces to every screen — even AR/VR.",
    icon: "◈",
    color: "var(--neon-violet)",
  },
  {
    title: "Zero-Trust Mesh",
    desc: "End-to-end encryption with quantum-safe key exchange and edge-deployed authentication.",
    icon: "⬡",
    color: "var(--neon-magenta)",
  },
  {
    title: "Agent Orchestrator",
    desc: "Conduct fleets of specialised agents through a unified, type-safe workflow runtime.",
    icon: "❖",
    color: "var(--neon-blue)",
  },
  {
    title: "Realtime Sync",
    desc: "Conflict-free replicated data delivers sub-frame collaboration across continents.",
    icon: "◉",
    color: "var(--neon-cyan)",
  },
  {
    title: "Cinematic Insights",
    desc: "Telemetry rendered as scenes, not dashboards — every metric tells a story.",
    icon: "▲",
    color: "var(--neon-magenta)",
  },
];

function FeatureCard({ f, i }: { f: (typeof features)[number]; i: number }) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    const rx = (y / rect.height - 0.5) * -8;
    const ry = (x / rect.width - 0.5) * 8;
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
  };

  const handleLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", `0deg`);
    e.currentTarget.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative glass rounded-3xl p-7 overflow-hidden transition-transform duration-300 will-change-transform"
      style={{
        transform: "perspective(1000px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
      }}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), ${f.color}25, transparent 50%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${f.color}55, 0 0 50px -10px ${f.color}` }}
      />

      <div
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        style={{
          background: `linear-gradient(135deg, ${f.color}33, transparent)`,
          boxShadow: `0 0 30px -5px ${f.color}aa, inset 0 0 0 1px ${f.color}66`,
          color: f.color,
        }}
      >
        {f.icon}
      </div>
      <h3 className="relative font-display text-xl font-semibold mb-2">{f.title}</h3>
      <p className="relative text-sm text-muted-foreground leading-relaxed">{f.desc}</p>

      <div className="relative mt-5 inline-flex items-center gap-1 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
        EXPLORE <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
            <span className="h-1 w-1 rounded-full bg-[var(--neon-cyan)]" /> CAPABILITIES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">A platform engineered for </span>
            <span className="text-gradient-neon">tomorrow.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every primitive in Nebula.OS is built around one principle: zero friction between
            imagination and pixels on screen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
