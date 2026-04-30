import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 99.99, suffix: "%", label: "Uptime SLA", color: "var(--neon-cyan)" },
  { value: 12, suffix: "ms", label: "Median latency", color: "var(--neon-violet)" },
  { value: 4.2, suffix: "M", label: "Active developers", color: "var(--neon-magenta)" },
  { value: 180, suffix: "+", label: "Edge regions", color: "var(--neon-blue)" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const decimals = value % 1 !== 0 ? (value < 100 ? 2 : 1) : 0;
  const display = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, value, mv]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [display, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section id="stats" className="relative py-32 px-6">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--neon-violet), transparent)" }}
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
            <span className="h-1 w-1 rounded-full bg-[var(--neon-magenta)]" /> AT SCALE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Powering the next era of </span>
            <span className="text-gradient-neon">interfaces.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group"
            >
              <div
                className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl"
                style={{ background: s.color }}
              />
              <div
                className="relative font-display text-4xl sm:text-5xl font-bold tracking-tight"
                style={{ color: s.color, textShadow: `0 0 30px ${s.color}aa` }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="relative mt-3 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
