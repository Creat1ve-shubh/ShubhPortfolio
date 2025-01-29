'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Projects = () => {
    return (
        <div className='mt-[10vh]'>
            <div className='text-center text-black text-2xl font-bold'>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        500,
                        'My Projects', // initially rendered starting point
                        1000,
                        'Mere Projects',
                    ]}
                    speed={30}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>


                <div className='bg-black mt-10 mx-[30vh] px-[40vh] py-5 transition-all duration-300 hover:scale-105 items-center rounded-lg'>
                    <h2 className='text-white text-center text-xl font-bold'>Project 1</h2>
                    <button className='bg-white text-black ml-[95vh] px-5 py-2 text-bold rounded-lg' href=''>Visit</button></div>
                <div className='bg-black mt-10 mx-[30vh] px-[40vh] py-5 transition-all duration-300 hover:scale-105 items-center rounded-lg'>
                    <h2 className='text-white text-center text-xl font-bold'>Project 2</h2>
                    <button className='bg-white text-black ml-[95vh] px-5 py-2 text-bold rounded-lg' href=''>Visit</button></div>
                <div className='bg-black mt-10 mx-[30vh] px-[40vh] py-5 transition-all duration-300 hover:scale-105 items-center rounded-lg'>
                    <h2 className='text-white text-center text-xl font-bold'>Project 3</h2>
                    <button className='bg-white text-black ml-[95vh] px-5 py-2 text-bold rounded-lg' href=''>Visit</button></div>
                <div className='bg-black mt-10 mx-[30vh] px-[40vh] py-5 transition-all duration-300 hover:scale-105 items-center rounded-lg'>

                    <h2 className='text-white text-center text-xl font-bold'>Project 4</h2>
                    <button className='bg-white text-black ml-[95vh] px-5 py-2 text-bold rounded-lg' href=''>Visit</button></div>

            </div>
            )
}

            export default Projects
