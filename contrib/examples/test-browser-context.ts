import { afterEach, beforeEach, expect, vi } from "vitest";

let stubbedBrowserContext = false;

beforeEach(() => {
  const testPath = expect.getState().testPath ?? "";
  if (!testPath.includes("/contrib/examples/")) return;

  vi.stubGlobal("window", {});
  vi.stubGlobal("navigator", { credentials: {} });
  stubbedBrowserContext = true;
});

afterEach(() => {
  if (!stubbedBrowserContext) return;
  vi.unstubAllGlobals();
  stubbedBrowserContext = false;
});