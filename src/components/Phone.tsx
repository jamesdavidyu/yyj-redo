"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

export const Phone = () => {
  const [signUpForm, setSignUpForm] = useState<boolean>();

  return (
    <Card className="flex justify-center items-center h-96 bg-blue-600 text-white border-8 border-stone-700">
      {signUpForm ? (
        <div className="flex flex-col items-center space-y-2">
          <p className="font-bold">Who Is You?</p>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button className="w-full">Sign Up</Button>
        </div>
      ) : (
        <Button
          onClick={() => setSignUpForm(!signUpForm)}
          className="text-wrap w-40 h-fit"
        >
          Create an account for more content!
        </Button>
      )}
      <div className="absolute mt-72">
        <Button variant="link">Preview</Button>
      </div>
    </Card>
  );
};
