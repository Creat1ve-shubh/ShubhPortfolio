import React from "react";
import Image from "next/image";
import banner from "../assets/banner.jpeg";

const Hero = () => {
  return (
    <div className="ml-[10vh] my-[8vh] flex items-center space-x-8 rounded-lg">
      <h1 className="text-7xl font-thin font-serif text-black">lets get this rolling</h1>
      <div className="" >
        <Image src={banner} alt="banner" width={1500} height={1100} />
      </div>
    </div>
  );
};

export default Hero;
