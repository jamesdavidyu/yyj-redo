"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

export const Computer = () => {
  const [loginForm, setLoginForm] = useState<boolean>();

  return (
    <Card className="flex justify-center items-center bg-blue-600 text-white border-8 border-stone-700 min-h-screen lg:min-h-0 lg:h-[35rem]">
      {!loginForm ? (
        <Button onClick={() => setLoginForm(!loginForm)}>
          {/* TODO: replace with logo */}
          Replace with logo
        </Button>
      ) : (
        <div className="flex flex-col space-y-2">
          <p className="font-bold flex justify-center">Welcome Back!</p>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button className="w-full">Login</Button>
        </div>
      )}
      <div className="absolute mt-72">
        {/* TODO: need to make this click through to youtube playlist and singles */}
        <Button variant="link">Preview</Button>
      </div>
    </Card>
  );
};
