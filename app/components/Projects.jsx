'use client'

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const projects = [
    { id: 1, name: 'Oneiros 2025', link: '#', image: '/images/project1.jpg' },
    { id: 2, name: 'MUJ ACM SChap Website', link: '#', image: '/images/project2.jpg' },
    { id: 3, name: 'MUJ ACM Elicit 2024', link: '#', image: '/images/project3.jpg' },
    { id: 4, name: 'SocialNotes', link: '#', image: '/images/project4.jpg' },
    { id: 5, name: 'BuyWithMe', link: '#', image: '/images/project3.jpg' },
    { id: 6, name: 'Co-react', link: '#', image: '/images/project4.jpg' },

];

const ProjectCard = ({ name, link, image }) => (

    <div
        className="relative w-full max-w-lg h-36 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        {/* Overlay for better text contrast */}

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-xl font-bold">{name}</h2>
            <a href={link} className="mt-4 bg-white text-black px-5 py-2 font-bold rounded-lg hover:bg-slate-300">
                Visit
            </a>
        </div>
    </div>

);

const Projects = () => {
    return (

        <div className="mt-[10vh] flex flex-col items-center px-4">

            <div className="text-center text-black text-2xl font-bold">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[500, 'My Projects', 1000, 'Mere Projects']}
                    speed={30}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>


            <div className="mt-10 flex flex-wrap justify-center gap-6 w-full">
                {projects.map((project) => (
                    <ProjectCard key={project.id} name={project.name} link={project.link} image={project.image} />
                ))}
            </div>
        </div>

    );
};

export default Projects;
