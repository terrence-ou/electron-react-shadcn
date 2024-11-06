import { electronAPI } from "@electron-toolkit/preload";
import { GetVersionsFn } from "@shared/types";

export const getVersions: GetVersionsFn = async () => {
  const versions = electronAPI.process.versions;
  return versions;
};
