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
      >
        <a href="https://planorban.com">
          <img
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLSgxEf8i4ZGeSIWMpQRy6gK7A5vNl0HaJDrVx"
            alt="Planorban Logo"
            className="rounded-full"
            title="Developed by Planorban"
          />
        </a>
      </Button>
      {on ? (
        <Card className="bg-gradient-to-b from-orange-600 to-black w-96 h-[70%] border-none rounded-none" />
      ) : (
        <Card className="bg-stone-700 w-10 h-[70%] border-none rounded-none" />
      )}
    </div>
  );
};
