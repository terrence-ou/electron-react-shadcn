import { electronAPI } from "@electron-toolkit/preload";
export type GetVersionsFn = () => Promise<typeof electronAPI.process.versions>;
