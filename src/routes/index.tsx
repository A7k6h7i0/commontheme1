import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/landing/Cursor";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import { Stats } from "@/components/landing/Stats";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nebula.OS - Cinematic OS for builders of tomorrow" },
      {
        name: "description",
        content:
          "Nebula.OS is the cinematic operating system for modern teams. Ship intelligent interfaces and orchestrate fleets of agents at the speed of thought.",
      },
      { property: "og:title", content: "Nebula.OS - Cinematic OS for builders" },
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
