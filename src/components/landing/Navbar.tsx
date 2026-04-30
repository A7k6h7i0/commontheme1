import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "Stats", "Pricing", "Docs"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-4 py-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_10px_40px_-10px_oklch(0_0_0/0.6)]" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)] shadow-[var(--shadow-glow-violet)]">
              <span className="absolute inset-[2px] rounded-md bg-background/80" />
              <span className="relative font-mono text-xs font-bold text-gradient-neon">N</span>
            </span>
            <span className="font-display font-semibold tracking-tight">
              Nebula<span className="text-gradient-neon">.OS</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="relative inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] shadow-[var(--shadow-glow-cyan)] hover:shadow-[var(--shadow-glow-violet)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Launch
              <span aria-hidden>→</span>
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
