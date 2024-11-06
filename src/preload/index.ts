import { contextBridge } from "electron";
import { ipcRenderer } from "electron/renderer";
import { GetVersionsFn } from "@shared/types";
//
// Custom APIs for renderer
//const api = {};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
//if (process.contextIsolated) {
//  try {
//    contextBridge.exposeInMainWorld("electron", electronAPI);
//    contextBridge.exposeInMainWorld("api", api);
//  } catch (error) {
//    console.error(error);
//  }
//} else {
//  // @ts-ignore (define in dts)
//  window.electron = electronAPI;
//  // @ts-ignore (define in dts)
//  window.api = api;
//}

if (!process.contextIsolated) {
  throw new Error("Context isolation must be enabled in the Browser window");
}

try {
  contextBridge.exposeInMainWorld("context", {
    getVersions: (...args: Parameters<GetVersionsFn>) =>
      ipcRenderer.invoke("getVersions", ...args),
  });
} catch (error) {
  console.error("Error occured when establishing context bridge: ", error);
}
