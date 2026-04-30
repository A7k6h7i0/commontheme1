import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Cursor() {
  const dotRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;
    let active = true;
    const onMove = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: dotRef,
        className: "pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full hidden md:block",
        style: { background: "var(--neon-cyan)", boxShadow: "0 0 14px var(--neon-cyan)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ringRef,
        className: "pointer-events-none fixed top-0 left-0 z-[99] h-9 w-9 rounded-full border hidden md:block",
        style: {
          borderColor: "oklch(0.7 0.22 255 / 0.5)",
          boxShadow: "0 0 22px oklch(0.7 0.22 255 / 0.4), inset 0 0 14px oklch(0.7 0.22 255 / 0.25)",
          transition: "width .25s, height .25s"
        }
      }
    )
  ] });
}
const features = [
  {
    title: "Neural Compose",
    desc: "Generate, refactor and animate UI with multi-modal models that understand your design system.",
    icon: "✦",
    color: "var(--neon-cyan)"
  },
  {
    title: "Holo Render",
    desc: "GPU-accelerated rendering pipeline ships 120 fps interfaces to every screen — even AR/VR.",
    icon: "◈",
    color: "var(--neon-violet)"
  },
  {
    title: "Zero-Trust Mesh",
    desc: "End-to-end encryption with quantum-safe key exchange and edge-deployed authentication.",
    icon: "⬡",
    color: "var(--neon-magenta)"
  },
  {
    title: "Agent Orchestrator",
    desc: "Conduct fleets of specialised agents through a unified, type-safe workflow runtime.",
    icon: "❖",
    color: "var(--neon-blue)"
  },
  {
    title: "Realtime Sync",
    desc: "Conflict-free replicated data delivers sub-frame collaboration across continents.",
    icon: "◉",
    color: "var(--neon-cyan)"
  },
  {
    title: "Cinematic Insights",
    desc: "Telemetry rendered as scenes, not dashboards — every metric tells a story.",
    icon: "▲",
    color: "var(--neon-magenta)"
  }
];
function FeatureCard({ f, i }) {
  const handleMove = (e) => {
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
  const handleLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", `0deg`);
    e.currentTarget.style.setProperty("--ry", `0deg`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
      onMouseMove: handleMove,
      onMouseLeave: handleLeave,
      className: "group relative glass rounded-3xl p-7 overflow-hidden transition-transform duration-300 will-change-transform",
      style: {
        transform: "perspective(1000px) rotateX(var(--rx,0)) rotateY(var(--ry,0))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
            style: {
              background: `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), ${f.color}25, transparent 50%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            style: { boxShadow: `inset 0 0 0 1px ${f.color}55, 0 0 50px -10px ${f.color}` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
            style: {
              background: `linear-gradient(135deg, ${f.color}33, transparent)`,
              boxShadow: `0 0 30px -5px ${f.color}aa, inset 0 0 0 1px ${f.color}66`,
              color: f.color
            },
            children: f.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative font-display text-xl font-semibold mb-2", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm text-muted-foreground leading-relaxed", children: f.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 inline-flex items-center gap-1 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors", children: [
          "EXPLORE ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
        ] })
      ]
    }
  );
}
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-2xl mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-[var(--neon-cyan)]" }),
            " CAPABILITIES"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "A platform engineered for " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: "tomorrow." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every primitive in Nebula.OS is built around one principle: zero friction between imagination and pixels on screen." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { f, i }, f.title)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative px-6 pb-10 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-8 sm:p-10 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--neon-violet)] opacity-30 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--neon-cyan)] opacity-25 blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-[2px] rounded-md bg-background/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-mono text-xs font-bold text-gradient-neon", children: "N" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold", children: [
            "Nebula",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: ".OS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs", children: "The cinematic operating system for builders of tomorrow." })
      ] }),
      [
        { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
        { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
        { title: "Resources", links: ["Docs", "API", "Status", "Security"] }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm hover:text-gradient-neon transition-colors", children: l }) }, l)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Nebula Systems. Render reality." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-widest", children: "v3.0.42 · BUILD STABLE" })
    ] })
  ] }) }) });
}
function Particles({ count = 50, className = "" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--mx", `${x * 30}px`);
      el.style.setProperty("--my", `${y * 30}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const particles = reactExports.useMemo(() => {
    const colors = [
      "var(--neon-cyan)",
      "var(--neon-violet)",
      "var(--neon-magenta)",
      "var(--neon-blue)"
    ];
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 2.2 + 0.8;
      return {
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
        color: colors[i % colors.length]
      };
    });
  }, [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      style: {
        transform: "translate3d(var(--mx,0), var(--my,0), 0)",
        transition: "transform 0.4s ease-out"
      },
      children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "absolute rounded-full animate-float",
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.7
          }
        },
        p.id
      ))
    }
  );
}
const HeroOrb = reactExports.lazy(
  () => import("./HeroOrb-BZpBOINQ.mjs").then((module) => ({
    default: module.HeroOrb
  }))
);
function OrbFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-violet)]/25 via-transparent to-[var(--neon-magenta)]/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[15%] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[28%] rounded-full bg-[var(--neon-cyan)]/20 blur-2xl" })
  ] });
}
function Hero() {
  const [showOrb, setShowOrb] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;
    const idle = "requestIdleCallback" in window ? window.requestIdleCallback(() => setShowOrb(true), { timeout: 1200 }) : window.setTimeout(() => setShowOrb(true), 800);
    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idle);
        return;
      }
      window.clearTimeout(idle);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: { background: "var(--gradient-aurora)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-bg opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -z-10 top-1/4 left-1/4 h-72 w-72 rounded-full bg-[var(--neon-violet)] animate-pulse-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -z-10 bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow",
        style: { animationDelay: "1.5s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 32 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[var(--neon-cyan)] animate-ping opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative rounded-full h-2 w-2 bg-[var(--neon-cyan)]" })
              ] }),
              "v3.0 — Quantum runtime now live"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Build at the" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: "speed of thought." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.45 },
            className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",
            children: "Nebula.OS is the cinematic operating system for modern teams. Ship intelligent interfaces, orchestrate fleets of agents, and render reality at 120 fps."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.6 },
            className: "mt-8 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#pricing",
                  className: "group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-violet)] shadow-[var(--shadow-glow-cyan)] hover:shadow-[var(--shadow-glow-violet)] transition-all duration-500 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Start free trial" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#features",
                  className: "group inline-flex items-center gap-2 glass rounded-2xl px-6 py-3.5 font-medium hover:bg-white/10 transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-white/10", children: "▶" }),
                    "Watch the film"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 1 },
            className: "mt-12 flex items-center gap-6 text-xs font-mono text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TRUSTED BY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-5 opacity-70", children: ["VOLTRA", "AETHER", "NOVA·LABS", "HYPERION", "ECLIPSE"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-[0.2em] hover:text-foreground transition-colors", children: b }, b)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          className: "relative h-[480px] lg:h-[560px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-violet)]/30 via-transparent to-[var(--neon-magenta)]/20 blur-3xl" }),
            showOrb ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(OrbFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroOrb, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(OrbFallback, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 1 },
                className: "absolute top-10 -left-2 glass-strong rounded-2xl p-3 w-44 animate-float shadow-[var(--shadow-elevated)]",
                style: { animationDuration: "9s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-blue)]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-16 rounded bg-white/40 mb-1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-10 rounded bg-white/15" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-3/4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)]" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 1.2 },
                className: "absolute bottom-12 -right-2 glass-strong rounded-2xl p-4 w-52 animate-float shadow-[var(--shadow-elevated)]",
                style: { animationDuration: "11s", animationDelay: "1s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-muted-foreground tracking-widest", children: "LATENCY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient-neon mt-1", children: "12ms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-end gap-0.5 h-8", children: [40, 70, 30, 90, 55, 80, 45, 95, 60, 75].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 rounded-sm bg-gradient-to-t from-[var(--neon-violet)] to-[var(--neon-magenta)] opacity-70",
                      style: { height: `${h}%` }
                    },
                    i
                  )) })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 20;
      setScrolled((current) => current === next ? current : next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Features", "Stats", "Pricing", "Docs"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: `glass rounded-2xl flex items-center justify-between px-4 py-3 transition-all duration-500 ${scrolled ? "shadow-[0_10px_40px_-10px_oklch(0_0_0/0.6)]" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)] shadow-[var(--shadow-glow-violet)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-[2px] rounded-md bg-background/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-mono text-xs font-bold text-gradient-neon", children: "N" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold tracking-tight", children: [
                "Nebula",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: ".OS" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `#${l.toLowerCase()}`,
                className: "px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors",
                children: l
              }
            ) }, l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#pricing",
                  className: "hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5",
                  children: "Sign in"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#pricing",
                  className: "relative inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] shadow-[var(--shadow-glow-cyan)] hover:shadow-[var(--shadow-glow-violet)] transition-all duration-300 hover:-translate-y-0.5",
                  children: [
                    "Launch",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
}
const tiers = [
  {
    name: "Pulse",
    price: "0",
    period: "forever",
    desc: "For solo creators exploring the Nebula universe.",
    features: ["3 projects", "Community render farm", "Basic agent runtime", "1 GB storage"],
    cta: "Start free",
    glow: "var(--neon-cyan)",
    featured: false
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
      "Telemetry suite"
    ],
    cta: "Launch Flux",
    glow: "var(--neon-violet)",
    featured: true
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
      "SOC 2 + HIPAA"
    ],
    cta: "Talk to sales",
    glow: "var(--neon-magenta)",
    featured: false
  }
];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative py-32 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: { background: "var(--gradient-aurora)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-[var(--neon-violet)] opacity-20 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center max-w-2xl mx-auto mb-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-[var(--neon-violet)]" }),
              " PRICING"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Pick your " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: "orbit." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Transparent pricing. Cancel anytime. Upgrade as your universe expands." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch", children: tiers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
          className: `relative group ${t.featured ? "lg:-translate-y-6 lg:scale-[1.04] z-10" : "z-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-3xl translate-y-3 opacity-40 blur-2xl transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-70",
                style: { background: t.glow }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `relative glass-strong rounded-3xl p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 ${t.featured ? "neon-border" : ""}`,
                style: {
                  boxShadow: t.featured ? `var(--shadow-elevated), 0 0 60px -10px ${t.glow}` : "var(--shadow-elevated)"
                },
                children: [
                  t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-widest text-primary-foreground",
                      style: {
                        background: "var(--gradient-neon)",
                        boxShadow: `0 0 30px ${t.glow}`
                      },
                      children: "MOST POPULAR"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-8 w-8 rounded-full",
                        style: {
                          background: `radial-gradient(circle at 30% 30%, ${t.glow}, transparent 70%)`,
                          boxShadow: `0 0 25px ${t.glow}`
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-display text-5xl font-bold",
                        style: { color: t.glow, textShadow: `0 0 30px ${t.glow}88` },
                        children: t.price === "Custom" ? t.price : `$${t.price}`
                      }
                    ),
                    t.period && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t.period })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 flex-1", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "flex h-5 w-5 items-center justify-center rounded-full text-[10px]",
                        style: {
                          background: `${t.glow}25`,
                          color: t.glow,
                          boxShadow: `inset 0 0 0 1px ${t.glow}55`
                        },
                        children: "✓"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: f })
                  ] }, f)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#",
                      className: `mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 ${t.featured ? "text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)]" : "glass hover:bg-white/10"}`,
                      style: t.featured ? { boxShadow: `0 0 30px ${t.glow}` } : void 0,
                      children: [
                        t.cta,
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "→" })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        },
        t.name
      )) })
    ] })
  ] });
}
const stats = [
  { value: 99.99, suffix: "%", label: "Uptime SLA", color: "var(--neon-cyan)" },
  { value: 12, suffix: "ms", label: "Median latency", color: "var(--neon-violet)" },
  { value: 4.2, suffix: "M", label: "Active developers", color: "var(--neon-magenta)" },
  { value: 180, suffix: "+", label: "Edge regions", color: "var(--neon-blue)" }
];
function Counter({ value, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const decimals = value % 1 !== 0 ? value < 100 ? 2 : 1 : 0;
  const display = useTransform(mv, (v) => v.toFixed(decimals));
  reactExports.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, value, mv]);
  reactExports.useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [display, suffix]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    "0",
    suffix
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "stats", className: "relative py-32 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 top-1/2 -translate-y-1/2 h-px",
        style: {
          background: "linear-gradient(90deg, transparent, var(--neon-violet), transparent)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center max-w-2xl mx-auto mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-muted-foreground mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-[var(--neon-magenta)]" }),
              " AT SCALE"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Powering the next era of " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: "interfaces." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
          className: "glass rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-1/2 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-3xl",
                style: { background: s.color }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative font-display text-4xl sm:text-5xl font-bold tracking-tight",
                style: { color: s.color, textShadow: `0 0 30px ${s.color}aa` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.value, suffix: s.suffix })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-3 text-sm text-muted-foreground font-mono uppercase tracking-wider", children: s.label })
          ]
        },
        s.label
      )) })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
