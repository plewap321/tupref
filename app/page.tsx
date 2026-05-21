// npm install framer-motion
// npm install motion

"use client";

import Image from "next/image";
import choix from "@/data/choix.json";
import { useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rotationKey, setRotationkey] = useState(0);
  const [colorChange , setColorChange] = useState(false)

  const current = choix[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % choix.length);
  };

  const reset = () => {

    setIndex(0);
    setRotationkey((prev) => prev + 1)
  };

  const time = () => {
    if (loading) return;
    setLoading(true);
    setColorChange(true);
    setTimeout(() => {
      next();
      setColorChange(false);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">

      <div className="w-full h-screen relative flex flex-col">

        <button
          onClick={time}
          className={colorChange ?  "h-1/2 w-full bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-700 text-4xl font-extrabold text-zinc-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "h-1/2 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur-[0.5px] text-4xl font-extrabold text-white drop-shadow-[0_0_15px_white] shadow-[0_0_25px_rgba(255,255,255,0.9)]"}
        >
          {current?.Choix1}
        </button>

        <button
          onClick={time}
          className={colorChange? "h-1/2 w-full bg-gradient-to-r from-zinc-700 via-zinc-800 to-black text-4xl font-extrabold tracking-widest text-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" : "h-1/2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white text-4xl font-extrabold tracking-widest shadow-[0_0_70px_rgba(255,60,0,0.8)] drop-shadow-[0_0_25px_white]"}
        >
          {current?.Choix2}
        </button>

        <motion.div
          key={rotationKey}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <button onClick={reset}>
            <Image
              src="/testing.png"
              alt="image"
              width={150}
              height={150}
            />
          </button>
        </motion.div>

      </div>
    </div>
  );
}