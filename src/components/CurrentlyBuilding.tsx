"use client";

import { useState, useEffect } from "react";

const FULL_TEXT = "I'm up to something — check back soon.";
const TYPE_SPEED = 65;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

function useTypewriter(text: string) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === text) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE);
    } else if (!isDeleting) {
      timeout = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        TYPE_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length - 1)),
        DELETE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text]);

  return displayed;
}

export default function CurrentlyBuilding() {
  const text = useTypewriter(FULL_TEXT);

  return (
    <div className="p-6 rounded-xl border-2 border-dashed border-zinc-700 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        <h3 className="font-semibold text-zinc-400">Currently Building</h3>
      </div>
      <p className="text-sm text-zinc-600 leading-relaxed min-h-[40px]">
        {text}
        <span className="inline-block w-0.5 h-3.5 bg-zinc-500 ml-0.5 animate-pulse align-middle" />
      </p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        <span className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-600">
          ???
        </span>
      </div>
    </div>
  );
}
