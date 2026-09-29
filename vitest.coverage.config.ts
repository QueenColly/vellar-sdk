import { defineConfig } from "vitest/config";
import { sdkSourceAliases } from "./vitest.alias";

export default defineConfig({
  resolve: { alias: sdkSourceAliases },
  test: {
    include: ["src/**/*.test.ts", "packages/*/src/**/*.test.ts"],
    exclude: ["**/*.integration.test.ts", "**/*.load.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts", "packages/*/src/**/*.ts"],
      exclude: ["**/*.test.ts", "**/*.d.ts"],
      reporter: ["text", "html"],
      reportOnFailure: true,
    },
  },
});