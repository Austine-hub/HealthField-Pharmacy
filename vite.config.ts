import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ============================================================
// ✅ Unified Vite Configuration
// - Enables React (SWC compiler)
// - Fixes browser refresh on React Router routes
// ============================================================
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // 👈 ensures /about, /team etc. reload properly
  },
  build: {
    outDir: "dist", // default but good to be explicit
  },
});
