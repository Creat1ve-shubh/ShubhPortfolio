import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 left-1/2 hover:bg-slate-400 shadow-xl transition-all duration-300 hover:scale-110 m-8 transform -translate-x-1/2 bg-transparent text-black py-2 px-8 rounded-md">
    <ul className="flex space-x-10">
      <li>
        <Link href="/">Twitter/X</Link>
      </li>
      <li>
        <Link href="/Shop">Github</Link>
      </li>
      <li>
        <Link href="/">LinkedIn</Link>
      </li>
     
   
    </ul>
  </nav>
  )
}

export default Navbar
