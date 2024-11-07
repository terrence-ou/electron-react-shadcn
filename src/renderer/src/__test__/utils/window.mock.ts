const context = Object.defineProperty(window, "context", {
  writable: true,
  value: {
    getVersions: jest.fn().mockImplementation(() => ({
      electron: "0.0",
      chrome: "0.0",
      node: "0.0",
    })),
    triggerIPC: jest.fn().mockImplementation(),
  },
});

export { context };
