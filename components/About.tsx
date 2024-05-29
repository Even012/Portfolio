import React from 'react'
import { WobbleCard } from './ui/wobblecard'


const About = () => {
  return (
    <div className="px-10" id='about'>
        <h2 className='heading py-20'>About <span className='text-purple'>me</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <WobbleCard >
            <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Proactive and detail-oriented <span className='text-purple'>Computer Science student at UNSW</span>
            </h2>
            <p className="mt-4 text-base/6 text-neutral-200">
                Proficient in programming languages including Python, C and JavaScript with a strong foundation in algorithms, machine
                learning, and web development. Actively seeking an internship position where I can further develop my software
                engineering skills and contribute to real-world technology solutions.
            </p>



          </WobbleCard>

          <WobbleCard containerClassName='col-span-1 lg:col-span-2'>
              <div className="max-w-xs">
                <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Proactive and detail-oriented <span className='text-purple'>Computer Science student at UNSW</span>
                </h2>
                <p className="mt-4 text-base/6 text-neutral-200">
                    Proficient in programming languages including Python, C and JavaScript with a strong foundation in algorithms, machine
                    learning, and web development. Actively seeking an internship position where I can further develop my software
                    engineering skills and contribute to real-world technology solutions.
                </p>
              </div>
              {/* <div className="xs:hidden w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] absolute -right-10 -bottom-10">
                <img
                  src="/b1.svg"
                  alt="/b1.svg"
                  className='lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] object-cover object-center'
                />
            </div> */}
          </WobbleCard>
        </div>
    </div>
  )
}

export default About