import { useState } from "react";
import { Button } from "@/components/ui/button";
import Versions from "@/components/Versions";
import electronIcon from "./assets/electron_icon.svg";
import reactIcon from "./assets/react_icon.svg";
import shadcnIcon from "./assets/shadcn_icon.svg";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const hanleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleTriggerIPC = () => {
    console.log(
      "IPC is invoked in main process, please check your terminal."
    );
    window.context.triggerIPC();
  };

  return (
    <div className="text-center">
      {/* logos */}
      <div className="flex justify-center items-center gap-6 my-8">
        <img
          className="w-32 opacity-80 animate-spin-slow"
          src={electronIcon}
        />
        <p className="text-3xl">+</p>
        <img
          className="w-32 h-28 opacity-80 animate-spin-slow"
          src={reactIcon}
        />
        <p className="text-3xl">+</p>
        <img
          className="w-32 h-24 opacity-80 animate-bounce-slow"
          src={shadcnIcon}
        />
      </div>
      {/* heading */}
      <h1 className="text-[2.1rem] mt-5 font-bold font-serif bg-gradient-to-r from-primary to-primary/40 text-secondary rounded-md">
        Electron + React + Shadcn
      </h1>
      <h3 className="my-5 font-bold text-lg">{count}</h3>
      {/* interaction buttons */}
      <div className="flex justify-center gap-5 mb-10">
        <Button onClick={hanleIncreaseCount} className="w-32 h-9">
          Increase Count
        </Button>
        <Button onClick={handleTriggerIPC} className="w-32 h-9">
          Invoke IPC
        </Button>
      </div>
      {/* versions */}
      <Versions />
      <p className="text-sm mt-0">
        Press <span className="font-bold">F12</span> to toggle the
        DevTool. Press <span className="font-bold">Ctrl/Cmd+r</span>{" "}
        to re-draw the view.
      </p>
    </div>
  );
};

export default App;
