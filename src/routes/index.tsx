import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { Cursor } from "@/components/landing/Cursor";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nebula.OS — Cinematic OS for builders of tomorrow" },
      {
        name: "description",
        content:
          "Nebula.OS is the cinematic operating system for modern teams. Ship intelligent interfaces and orchestrate fleets of agents at the speed of thought.",
      },
      { property: "og:title", content: "Nebula.OS — Cinematic OS for builders" },
      {
        property: "og:description",
        content: "Build at the speed of thought. Glass, neon and 120 fps interfaces.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Cursor />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Footer />
    </main>
  );
}
