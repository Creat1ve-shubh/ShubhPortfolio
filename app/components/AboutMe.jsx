

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
  return (
    <div>
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
      <p className='text-black text-center mt-[5vh] text-2xl font-semibold'>
        Hello there! I am Shubh, a passionate and dedicated full stack developer with a knack for solving painful problems to build innovative solutions.<br></br>
        I love building things that make an impact and always eager to take on new challenges.<br></br>
        I am always looking for new opportunities to learn and grow.
      </p>
    </div>
  )
}

export default AboutMe
