import { useEffect, useState } from "react";

const Versions = () => {
  const [versions, setVersions] = useState<
    { [key: string]: string } | undefined
  >(undefined);

  useEffect(() => {
    const getVersions = async () => {
      try {
        const result = await window.context.getVersions();
        setVersions(result);
      } catch (error) {
        console.error(error);
      }
    };
    getVersions();
  }, []);

  return (
    versions && (
      <ul className="flex gap-2">
        <li>Electron v{versions.electron}</li>
        <li>Chromium v{versions.chrome}</li>
        <li>Node v{versions.node}</li>
      </ul>
    )
  );
};

export default Versions;
