import { vi } from "vitest";

const context = Object.defineProperty(window, "context", {
  writable: true,
  value: {
    getVersions: vi.fn().mockImplementation(() => ({
      electron: "0.0",
      chrome: "0.0",
      node: "0.0",
    })),
    triggerIPC: vi.fn().mockImplementation(() => {}),
  },
});

export { context };
