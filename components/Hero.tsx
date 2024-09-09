import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='w-full h-full' id='home'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-[100vh] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.3] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-80'>
                  Hi There, welcome to my site.
                </h2>
                <TextGenerateEffect 
                  className='text-center text-[40px] md:text-5xl lg:text-6xl'
                  words='I&apos;m Even Chen, a CS student recently graduated from UNSW.'
                />

                {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    I&apos;m Even, a CS student recently graduated from UNSW.
                </p> */}
                <div className="flex flex-row gap-10">
                  <a href='#about'>
                      <MagicButton 
                        title='see portfolio'
                        icon={<FaLocationArrow />}
                        position='right'
                      />
                  </a>
                  <a href='#contact'>
                      <MagicButton 
                        title='contact me'
                        icon={<FaLocationArrow />}
                        position='right'
                      />
                  </a>
                </div>
            </div>
        </div>
    </div>     
  )
}

export default Hero;