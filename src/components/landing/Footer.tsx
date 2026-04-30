export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--neon-violet)] opacity-30 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--neon-cyan)] opacity-25 blur-[100px]" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-magenta)]">
                  <span className="absolute inset-[2px] rounded-md bg-background/80" />
                  <span className="relative font-mono text-xs font-bold text-gradient-neon">N</span>
                </span>
                <span className="font-display font-semibold">
                  Nebula<span className="text-gradient-neon">.OS</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                The cinematic operating system for builders of tomorrow.
              </p>
            </div>

            {[
              { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Resources", links: ["Docs", "API", "Status", "Security"] },
            ].map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                  {c.title}
                </h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:text-gradient-neon transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
            <span>© 2026 Nebula Systems. Render reality.</span>
            <span className="tracking-widest">v3.0.42 · BUILD STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
