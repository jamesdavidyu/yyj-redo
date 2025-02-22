"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

export const Computer = () => {
  const [loginForm, setLoginForm] = useState<boolean>();
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <Card className="flex justify-center items-center bg-blue-600 text-white border-8 border-stone-700 min-h-screen lg:min-h-0 lg:h-[35rem]">
      {preview ? (
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/videoseries?si=s1UK-ua6N_tg-ejc&amp;list=PLmqHrTntDj-lSOZhejmz_k_2CzYv87yrt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-screen xl:h-full"
        ></iframe>
      ) : !loginForm ? (
        <img
          onClick={() => setLoginForm(!loginForm)}
          src="https://m2my1rq4tt.ufs.sh/f/83acf69d-8644-4b12-a4ee-eb3508732d7b-xbioow.png"
          className="h-52 hover:cursor-pointer"
        />
      ) : (
        <div className="flex flex-col space-y-2">
          <p className="font-bold flex justify-center">Welcome Back!</p>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button className="w-full">Login</Button>
        </div>
      )}
      {preview ? (
        <div className="absolute mt-72">
          <Button variant="destructive" onClick={() => setPreview(false)}>
            Return
          </Button>
        </div>
      ) : (
        <div className="absolute mt-72">
          {/* TODO: need to make this click through to youtube playlist and singles */}
          <Button variant="link" onClick={() => setPreview(true)}>
            Preview Films
          </Button>
        </div>
      )}
    </Card>
  );
};
