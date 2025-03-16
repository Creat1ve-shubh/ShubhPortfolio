"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const timelineData = [
    {
        date: "Jan 2025 - Feb 2025",
        title: "Web Developer",
        company: "MUJ Oneiros (official college fest)",
        description: "Worked on the official website of the fest, built using Next.js and TailwindCSS.",
    },
    {
        date: "May 2024 - Present",
        title: "Head of Web Development",
        company: "MUJ ACM SCHAP",
        description: "Worked on maintaining and further developing the official website of the club.",
    },
    {
        date: "May 2025 - Present",
        title: "Head of Events",
        company: "Autonomoous",
        description: "Contributing event ideas and organizing events for the club.",
    },
];

const Timeline = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}

            >
                <div className="mb-10 text-2xl font-bold">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            '🔗 Experience', // initially rendered starting point
                            1000,
                            '🔗 Kaam Kaaj',
                        ]}
                        speed={30}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                        className="text-4xl font-bold text-center"
                    />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full  bg-gray-700"></div>

                {timelineData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between w-full mb-10 relative">
                        {/* Date on Left, Card on Right for even indexes */}
                        {index % 2 === 0 ? (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="w-1/3 text-right pr-4 text-black"
                                >
                                    <p className="text-lg text-black font-bold">{item.date}</p>
                                </motion.div>
                                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="w-1/3 bg-white border-2 border-black p-4 rounded-lg shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                                    <p className="text-black">{item.company}</p>
                                    <p className="text-black mt-2">{item.description}</p>
                                </motion.div>
                            </>
                        ) : (
                            /* Card on Left, Date on Right for odd indexes */
                            <>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="w-1/3 bg-white border-2 border-black p-4 rounded-lg shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                                    <p className="text-black">{item.company}</p>
                                    <p className="text-black mt-2">{item.description}</p>
                                </motion.div>
                                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="w-1/3 text-left pl-4 text-gray-300"
                                >
                                    <p className="text-lg text-black font-bold">{item.date}</p>
                                </motion.div>
                            </>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Timeline;
