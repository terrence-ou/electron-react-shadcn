import { useEffect, useState } from "react";

type AppVersion = { [key: string]: string } | undefined;

// The body of Versions component
// Displays the current version of Electron, Chromium, and Node.js
const Versions = () => {
  const [versions, setVersions] = useState<AppVersion>(undefined);

  useEffect(() => {
    const getVersions = async () => {
      try {
        const result = (await window.context.getVersions()) as AppVersion;
        setVersions(result);
      } catch (error) {
        console.error(error);
      }
    };
    getVersions();
  }, []);

  return (
    versions && (
      <ul className="flex gap-4 justify-center mt-6 text-sm font-semibold">
        <li>
          Electron{" "}
          <span className="italic font-light">v-{versions.electron}</span>
        </li>
        <li>
          Chromium{" "}
          <span className="italic font-light">v-{versions.chrome}</span>
        </li>
        <li>
          Node <span className="italic font-light">v-{versions.node}</span>
        </li>
      </ul>
    )
  );
};

export default Versions;
