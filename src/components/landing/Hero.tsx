import { motion } from "framer-motion";
import { HeroOrb } from "./HeroOrb";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Aurora */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-aurora)" }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      {/* Glow blobs */}
      <div className="absolute -z-10 top-1/4 left-1/4 h-72 w-72 rounded-full bg-[var(--neon-violet)] animate-pulse-glow" />
      <div
        className="absolute -z-10 bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <Particles count={60} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--neon-cyan)] animate-ping opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[var(--neon-cyan)]" />
            </span>
            v3.0 — Quantum runtime now live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Build at the</span>
            <br />
            <span className="text-gradient-neon">speed of thought.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Nebula.OS is the cinematic operating system for modern teams. Ship intelligent
            interfaces, orchestrate fleets of agents, and render reality at 120 fps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-violet)] shadow-[var(--shadow-glow-cyan)] hover:shadow-[var(--shadow-glow-violet)] transition-all duration-500 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Start free trial</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 glass rounded-2xl px-6 py-3.5 font-medium hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                ▶
              </span>
              Watch the film
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-6 text-xs font-mono text-muted-foreground"
          >
            <span>TRUSTED BY</span>
            <div className="flex flex-wrap gap-5 opacity-70">
              {["VOLTRA", "AETHER", "NOVA·LABS", "HYPERION", "ECLIPSE"].map((b) => (
                <span key={b} className="tracking-[0.2em] hover:text-foreground transition-colors">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[480px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-violet)]/30 via-transparent to-[var(--neon-magenta)]/20 blur-3xl" />
          <HeroOrb />

          {/* Floating UI cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-10 -left-2 glass-strong rounded-2xl p-3 w-44 animate-float shadow-[var(--shadow-elevated)]"
            style={{ animationDuration: "9s" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)]" />
              <div className="flex-1">
                <div className="h-2 w-16 rounded bg-white/40 mb-1" />
                <div className="h-1.5 w-10 rounded bg-white/15" />
              </div>
            </div>
            <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-12 -right-2 glass-strong rounded-2xl p-4 w-52 animate-float shadow-[var(--shadow-elevated)]"
            style={{ animationDuration: "11s", animationDelay: "1s" }}
          >
            <div className="text-[10px] font-mono text-muted-foreground tracking-widest">
              LATENCY
            </div>
            <div className="text-2xl font-bold text-gradient-neon mt-1">12ms</div>
            <div className="mt-2 flex items-end gap-0.5 h-8">
              {[40, 70, 30, 90, 55, 80, 45, 95, 60, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[var(--neon-violet)] to-[var(--neon-magenta)] opacity-70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
