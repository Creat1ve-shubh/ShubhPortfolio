import React, { useState } from 'react'
import Link from 'next/link'
import { Twitter, Github, Linkedin, Code2 } from 'lucide-react'

// Tooltip Component
const NavTooltip = ({ label, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative group">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs font-bold whitespace-nowrap border-2 border-black neo-shadow-sm">
          {label}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="fixed z-40 top-4 left-1/2 transform -translate-x-1/2 bg-white border-3 border-black neo-shadow w-fit">
      <ul className="flex space-x-4 md:space-x-6 p-3">
        <li>
          <NavTooltip label="Twitter/X">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-2 border-2 border-black hover:bg-blue-500 hover:text-white motion-hover hover:translate-x-[-1px] hover:translate-y-[-1px]" 
              aria-label="Twitter/X"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </NavTooltip>
        </li>
        <li>
          <NavTooltip label="GitHub">
            <a 
              href="https://github.com/Creat1ve-shubh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-2 border-2 border-black hover:bg-blue-500 hover:text-white motion-hover hover:translate-x-[-1px] hover:translate-y-[-1px]" 
              aria-label="Github"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </NavTooltip>
        </li>
        <li>
          <NavTooltip label="LinkedIn">
            <a 
              href="https://www.linkedin.com/in/shubh-shrivastava/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-2 border-2 border-black hover:bg-blue-500 hover:text-white motion-hover hover:translate-x-[-1px] hover:translate-y-[-1px]" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </NavTooltip>
        </li>
        <li>
          <NavTooltip label="LeetCode">
            <a 
              href="https://leetcode.com/u/Creat1ve-shubh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-2 border-2 border-black hover:bg-blue-500 hover:text-white motion-hover hover:translate-x-[-1px] hover:translate-y-[-1px]" 
              aria-label="Leetcode"
            >
              <Code2 className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </NavTooltip>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
