"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Lamp = () => {
  const [on, setOn] = useState<boolean>();

  return (
    <div className="2xl:flex flex-col w-fit items-center pt-4 h-screen hidden">
      <Button
        className="bg-white w-96 h-[30%] border-none cursor-pointer rounded-b-none rounded-t-full hover:bg-white/90"
        onClick={() => setOn(!on)}
      />
      {on ? (
        <Card className="bg-gradient-to-b from-orange-600 to-black w-96 h-[70%] border-none rounded-none" />
      ) : (
        <Card className="bg-stone-700 w-10 h-[70%] border-none rounded-none" />
      )}
    </div>
  );
};
