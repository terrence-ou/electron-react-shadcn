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

  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-6 my-4">
        <img className="w-32 opacity-70 animate-spin-slow" src={electronIcon} />
        <p className="text-3xl">+</p>
        <img className="w-32 opacity-70 animate-spin-slow" src={reactIcon} />
        <p className="text-3xl">+</p>
        <img
          className="w-32 h-24 opacity-70 animate-bounce-slow"
          src={shadcnIcon}
        />
      </div>
      <h1 className="text-[2.2rem] mt-5 font-bold text-zinc-700">
        Electron + React + Shadcn
      </h1>
      <h3 className="my-5">{count}</h3>
      <div className="flex justify-center gap-5">
        <Button onClick={hanleIncreaseCount} className="w-32 h-9">
          Increase Count
        </Button>
        <Button className="w-32 h-9">Invoke IPC</Button>
      </div>
      <Versions />
    </div>
  );
};

export default App;
