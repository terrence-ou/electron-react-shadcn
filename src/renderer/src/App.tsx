import Versions from "./components/Versions";

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");
  window.context.getVersions();
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-zinc-700">
          Electron + React + Shadcn
        </h1>
      </div>
      <Versions />
    </>
  );
}

export default App;
