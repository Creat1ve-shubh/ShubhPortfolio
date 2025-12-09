import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed z-40 top-4 left-1/2 transform -translate-x-1/2 bg-transparent text-black 
      py-2 px-4 md:px-8 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg 
      transition-all duration-300 hover:scale-105 w-fit">
      <ul className="flex space-x-6 md:space-x-10 font-semibold text-base md:text-lg">
        <li className="py-1">
          <Link href="/home" className="hover:text-blue-600 transition">Twitter/X</Link>
        </li>
        <li className="py-1">
          <a href="https://github.com/Creat1ve-shubh" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-600 ">
            Github
          </a>
        </li>
        <li className="py-1">
          <a href="https://www.linkedin.com/in/shubh-shrivastava/" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-600 transition">
            LinkedIn
          </a>
        </li>
        <li className="py-1">
          <a href="" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-600 transition">
            Leetcode
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
