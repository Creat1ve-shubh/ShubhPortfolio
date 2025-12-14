"use client"
import React from "react";
import Image from "next/image";
import shubh from '../assets/shubh.jpg';
import Keyframes from "./keyframe";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col mt-[10vh] sm:flex-row items-center justify-between px-6 py-10 max-w-screen-xl mx-auto gap-8">
      <div className="mx-10">
        <Keyframes />
      </div>
      
      <div className="flex-col">
        <p className="text-xs mb-3 font-bold uppercase tracking-[0.3em] text-black border-l-4 border-orange-500 pl-3">
          Welcome
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-black text-center sm:text-left leading-tight">
          Let's get this rolling
        </h1>
      </div>

      <div className="relative w-full sm:w-[60%] max-w-screen-md border-4 border-black neo-shadow-lg">
        <Image src={shubh} alt="banner" width={3000} height={1100} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
