import React from 'react'
import { Mail, ArrowRight, Heart, Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-white border-t-4 border-black py-16 mt-16 md:py-20 w-full'>
      <div className='max-w-4xl mx-auto px-4'>
        {/* Main Message */}
        <div className='mb-4'>
          <div className='inline-block bg-yellow-300 border-2 border-black px-3 py-1 text-xs font-bold mb-6'>
            <span className='flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              ONE LAST THING
            </span>
          </div>
          
          <h2 className='text-4xl md:text-6xl font-black text-black leading-tight mb-6'>
            Good ideas deserve good execution.
          </h2>
          
          <div className='space-y-4 text-base md:text-lg text-black font-medium leading-relaxed max-w-3xl'>
            <p>
              If you're building something that matters — a product people will actually use, 
              a system that needs to scale, or an experience that should feel effortless — 
              <span className='bg-blue-500 text-white px-2 py-0.5 mx-1 border-2 border-black font-bold'>
                I want to hear about it
              </span>.
            </p>
            
            <p>
              I'm looking for teams that value 
              <span className='bg-orange-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold'>
                craft
              </span>, 
              <span className='bg-green-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold'>
                clarity
              </span>, and 
              <span className='bg-pink-500 text-black px-2 py-0.5 mx-1 border-2 border-black font-bold'>
                impact
              </span>
              . If that sounds like your project, let's talk.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className='border-4 border-black bg-white neo-shadow-lg p-8 mb-10'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
            <div>
              <h3 className='text-2xl font-black text-black mb-2'>
                Ready to build something great?
              </h3>
              <p className='text-sm font-bold text-black'>
                Full-time roles, contract work, or just a conversation — all welcome.
              </p>
            </div>
            
            <a
              href='mailto:shubhshrivastavawork@gmail.com'
              className='flex items-center gap-3 px-8 py-4 border-3 border-black bg-blue-500 text-white font-black text-lg neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] motion-hover group'
            >
              Let's Talk
              <ArrowRight className='w-6 h-6 group-hover:translate-x-1 motion-hover' />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t-3 border-black pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
            <div className='flex items-center gap-2 font-bold text-black'>
              <span>Built with</span>
              <Heart className='w-4 h-4 fill-red-500 text-red-500' />
              <span>and late nights by</span>
              <a
                href='https://github.com/Creat1ve-shubh'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline hover:text-orange-500 motion-hover'
              >
                Shubh Shrivastava
              </a>
            </div>
            <div className='font-bold text-black'>
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer