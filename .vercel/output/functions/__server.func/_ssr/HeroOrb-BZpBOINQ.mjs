import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { S as Stars, F as Float, I as Icosahedron, M as MeshDistortMaterial, a as Sphere } from "../_libs/react-three__drei.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
function CoreOrb() {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    const { x, y } = state.pointer;
    ref.current.position.x += (x * 0.6 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 0.4 - ref.current.position.y) * 0.05;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.4, rotationIntensity: 0.6, floatIntensity: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icosahedron, { ref, args: [1.4, 2], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color: "#7c3aed",
      emissive: "#22d3ee",
      emissiveIntensity: 0.6,
      roughness: 0.15,
      metalness: 0.9,
      distort: 0.45,
      speed: 1.6
    }
  ) }) });
}
function Halo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 0.6, rotationIntensity: 0.4, floatIntensity: 0.6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { args: [2.2, 32, 32], children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#ec4899", wireframe: true, transparent: true, opacity: 0.15 }) }) });
}
function HeroOrb() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 5], fov: 45 },
      dpr: [1, 1.5],
      gl: { antialias: false, alpha: true, powerPreference: "high-performance" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.35 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1.7, color: "#22d3ee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, -5], intensity: 1.6, color: "#ec4899" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 5, -5], intensity: 1.2, color: "#7c3aed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CoreOrb, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Halo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, { radius: 40, depth: 30, count: 600, factor: 2.2, saturation: 1, fade: true, speed: 0.8 })
        ] })
      ]
    }
  );
}
export {
  HeroOrb
};
