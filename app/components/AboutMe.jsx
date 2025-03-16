
"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Experience from './Experience';
import ScrollLinked from './Experience';
import WorkExperience from './Experience';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className='flex flex-row gap-4 mt-[5vh] px-[20vh] text-black '>
          <div className='flex flex-col gap-4 max-w-4xl'>
            <div className='text-center text-black text-2xl font-bold'>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  '👾 About Me..', // initially rendered starting point
                  1000,
                  ' 👾 Mere Baare Mei.. ',
                ]}
                speed={30}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>
            <div className=' text-black'>
              < p className='text-black text-center mt-[5vh] text-2xl font-semibold' >
                Hello there! I am Shubh, a passionate and dedicated full stack developer <br /> with a knack for solving painful problems
                to build innovative solutions.<br></br >
                I love building things that make an impact and always eager to take on new challenges.<br></br >
                I am always looking for new opportunities to learn and grow.
              </p >
              <div className='px-40 py-[0.5px] rounded-lg bg-black m-10 '></div>
              <h1 className='text-2xl text-center items-center font-semibold mt-10 ml-24'>Primary Tech Stack I use ✍🏻</h1>
              <ul className=' text-center items-center justify-center text-2xl mt-5'>
                <li> → NextJS</li>
                <li> → NodeJS </li>
                <li> → ExpressJS</li>
                <li> → ReactJS </li>
                <li> → MongoDB </li>
                <li> → TailwindCSS</li>
                <li> → Github</li>
              </ul>
              <p className='text-black font-semibold text-2xl mt-10'> Other stuff I like to explore: </p>
              <p className='text-2xl font-medium'> Python, MySQL, Postgresql, Figma, Java, C </p>
            </div>
          </div>
          <div className='px-[0.5px] py-40 rounded-lg bg-black'></div>
          <div className='text-center items-center justify-center ml-10'>
            <WorkExperience />

          </div>

        </div >
      </motion.div>
    </div >

  )
}

export default AboutMe
