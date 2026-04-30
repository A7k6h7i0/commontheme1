import { motion } from "framer-motion";

const tiers = [
  {
    name: "Pulse",
    price: "0",
    period: "forever",
    desc: "For solo creators exploring the Nebula universe.",
    features: ["3 projects", "Community render farm", "Basic agent runtime", "1 GB storage"],
    cta: "Start free",
    glow: "var(--neon-cyan)",
    featured: false,
  },
  {
    name: "Flux",
    price: "29",
    period: "/ month",
    desc: "For teams shipping cinematic interfaces at scale.",
    features: [
      "Unlimited projects",
      "Priority GPU lanes",
      "Advanced agents",
      "100 GB storage",
      "Realtime collab",
      "Telemetry suite",
    ],
    cta: "Launch Flux",
    glow: "var(--neon-violet)",
    featured: true,
  },
  {
    name: "Singularity",
    price: "Custom",
    period: "",
    desc: "Quantum-grade infrastructure for the world's largest fleets.",
    features: [
      "Dedicated edge mesh",
      "On-prem render",
      "Custom models",
      "24/7 white-glove",
      "SOC 2 + HIPAA",
    ],
    cta: "Talk to sales",
    glow: "var(--neon-magenta)",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      {/* Depth layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-aurora)" }} />
      <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-[var(--neon-violet)] opacity-20 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
            <span className="h-1 w-1 rounded-full bg-[var(--neon-violet)]" /> PRICING
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Pick your </span>
            <span className="text-gradient-neon">orbit.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparent pricing. Cancel anytime. Upgrade as your universe expands.
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group ${t.featured ? "lg:-translate-y-6 lg:scale-[1.04] z-10" : "z-0"}`}
            >
              {/* Depth shadow layer */}
              <div
                className="absolute inset-0 rounded-3xl translate-y-3 opacity-40 blur-2xl transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-70"
                style={{ background: t.glow }}
              />

              <div
                className={`relative glass-strong rounded-3xl p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 ${
                  t.featured ? "neon-border" : ""
                }`}
                style={{
                  boxShadow: t.featured
                    ? `var(--shadow-elevated), 0 0 60px -10px ${t.glow}`
                    : "var(--shadow-elevated)",
                }}
              >
                {t.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-widest text-primary-foreground"
                    style={{
                      background: "var(--gradient-neon)",
                      boxShadow: `0 0 30px ${t.glow}`,
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  <div
                    className="h-8 w-8 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${t.glow}, transparent 70%)`,
                      boxShadow: `0 0 25px ${t.glow}`,
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className="font-display text-5xl font-bold"
                    style={{ color: t.glow, textShadow: `0 0 30px ${t.glow}88` }}
                  >
                    {t.price === "Custom" ? t.price : `$${t.price}`}
                  </span>
                  {t.period && <span className="text-sm text-muted-foreground">{t.period}</span>}
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px]"
                        style={{
                          background: `${t.glow}25`,
                          color: t.glow,
                          boxShadow: `inset 0 0 0 1px ${t.glow}55`,
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    t.featured
                      ? "text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)]"
                      : "glass hover:bg-white/10"
                  }`}
                  style={t.featured ? { boxShadow: `0 0 30px ${t.glow}` } : undefined}
                >
                  {t.cta}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
