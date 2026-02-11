import { defineConfig } from "vite"
import desktopPlugin from "./vite"

function getHostname(): string {
  const hostname = process.env.VITE_HOSTNAME ?? "0.0.0.0"
  if (hostname === "true") return "0.0.0.0"
  if (hostname === "false") return "localhost"
  return hostname
}

function getPort(): number {
  const port = process.env.VITE_PORT
  return port ? parseInt(port, 10) : 3000
}

export default defineConfig({
  plugins: [desktopPlugin] as any,
  server: {
    host: getHostname(),
    allowedHosts: true,
    port: getPort(),
  },
  build: {
    target: "esnext",
    // sourcemap: true,
  },
})
