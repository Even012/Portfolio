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
            <p className="mt-4 text-lg text-neutral-200 lg:py-5">
                Actively seeking an internship position where I can further develop my software
                engineering skills and contribute to real-world technology solutions.
            </p>



          </WobbleCard>

          <WobbleCard containerClassName='col-span-1 lg:col-span-2 min-h-[35vh]'>
              <div className="max-w-xs">
                <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    My <span className='text-purple'>tech stack</span>
                </h2>
                <p className="mt-4 text-neutral-200 lg:py-5 text-lg">
                  Proficient in programming languages including Python, C/C++ and JavaScript with a strong foundation in algorithms, machine
                  learning, and web development. 
                </p>
                <div className="flex gap-1 lg:gap-5 w-fit mt-4 ml-8 sm:absolute sm:bottom-5 sm:right-3 lg:right-10">

                  <div className="flex flex-col gap-3 lg:gap-8">
                    {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:gap-8">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                    {['Tailwind', 'MongoDB', 'Express'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </WobbleCard>
        </div>
    </div>
  )
}

export default About