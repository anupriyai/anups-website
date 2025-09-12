"use client";
import React, { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
};

export default function Typewriter({
  words,
  className,
  typingSpeed = 42,
  deletingSpeed = 28,
  pauseTime = 900,
  loop = true,
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timer: number;

    if (!isDeleting && text === current) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (loop ? (i + 1) % words.length : Math.min(i + 1, words.length - 1)));
    } else {
      timer = window.setTimeout(() => {
        const next = isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  return (
    <span className={className} aria-live="polite" aria-label={words[wordIndex % words.length]}>
      {text}
      <span className="inline-block w-[0.6ch] -mb-0.5 animate-pulse">|</span>
    </span>
  );
}
