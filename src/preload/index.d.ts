//import { ElectronAPI } from "@electron-toolkit/preload";

import { GetVersionsFn } from "@shared/types";

declare global {
  interface Window {
    context: {
      getVersions: GetVersionsFn;
    };
  }
}
