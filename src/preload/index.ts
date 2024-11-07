import { contextBridge } from "electron";
import { ipcRenderer } from "electron/renderer";
import { GetVersionsFn } from "@shared/types";

// The preload process plays a middleware role in bridging
// the call from the front end, and the function in the main process

if (!process.contextIsolated) {
  throw new Error("Context isolation must be enabled in the Browser window");
}

try {
  // Front end can call the function by using window.context.<Function name>
  contextBridge.exposeInMainWorld("context", {
    getVersions: (...args: Parameters<GetVersionsFn>) =>
      ipcRenderer.invoke("getVersions", ...args),
    triggerIPC: () => ipcRenderer.invoke("triggerIPC"),
  });
} catch (error) {
  console.error("Error occured when establishing context bridge: ", error);
}
