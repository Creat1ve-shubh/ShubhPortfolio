import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black mt-10 text-white text-xl space-x-2 flex flex-row items-center justify-center py-[10vh] w-full'>
      <h1 className='text-center font-thin font-sans'>Built with ❤️ by </h1>
      <a
        className='text-blue-600 font-serif font-black'
        target='_blank'
        href='https://github.com/Creat1ve-shubh'> Shubh Shrivastava </a>
    </div>
  )
}

export default Footer