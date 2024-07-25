import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capjsplugins.br",
  appName: "capjs-plugins",
  webDir: "dist",
  server: {
    url: "http://192.168.18.32:5173",
    cleartext: true,
  },
};

export default config;
