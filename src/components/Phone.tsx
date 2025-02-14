"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

export const Phone = () => {
  const [signUpForm, setSignUpForm] = useState<boolean>();
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <Card className="flex justify-center items-center h-96 bg-blue-600 text-white border-8 border-stone-700">
      {preview ? (
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/videoseries?si=VoK63HYORtoH4TSL&amp;list=PLmqHrTntDj-ksa6BcleEgFZP_wUeLRzCL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      ) : signUpForm ? (
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
      {preview ? (
        <div className="absolute mt-72">
          <Button variant="destructive" onClick={() => setPreview(false)}>
            Return
          </Button>
        </div>
      ) : (
        <div className="absolute mt-72">
          <Button variant="link" onClick={() => setPreview(true)}>
            Preview
          </Button>
        </div>
      )}
    </Card>
  );
};
