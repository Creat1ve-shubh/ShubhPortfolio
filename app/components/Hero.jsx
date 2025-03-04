import React from "react";
import Image from "next/image";
import shubh from '../assets/shubh.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col mt-[10vh] sm:flex-row items-center justify-between px-6 py-10 max-w-screen-xl mx-auto gap-6">

      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin font-serif text-black text-center sm:text-left">
        Lets get this rolling
      </h1>

      <div className="relative w-full sm:w-[60%] max-w-screen-md">
        <Image src={shubh} alt="banner" width={3000} height={1100} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
