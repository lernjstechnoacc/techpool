import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const ThirdStep = () => {
    return (
        <motion.div 
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className=' py-[200px] bg-slate-200 '>
            <div className="container max-w-[1280px] mx-auto flex flex-wrap px-4">
                
                <motion.div custom={1} variants={animate.Opacity} className='flex w-1/2 pt-12 lg:justify-center lg:w-full'>
                         <img className='w-[500px] h-[500px]'  src="/thirdLogo.svg" alt="" />
                </motion.div>   

                <div className='w-1/2  flex flex-col lg:items-center lg:w-full  '>
                    <motion.h1 custom={2} variants={animate.Opacity} className=' text-5xl mb-5'>3. Measure email campaign results</motion.h1>
                    <motion.p custom={3} variants={animate.Opacity} className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.</motion.p>
                    <motion.div custom={6} variants={animate.Left} className='flex items-start justify-start mb-5'>
                        <img className=' rounded-2xl mr-6' src="third1.svg" alt="" />
                        <div className='flex flex-col justify-between'>
                            <h2 className=' text-xl text-teal-800 font-extrabold'>Granular reports</h2>
                            <p>Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus</p>
                        </div>
                    </motion.div>
                    <motion.div custom={6} variants={animate.Left} className='flex mb-5'>
                        <img className=' rounded-2xl mr-6' src="third2.svg" alt="" />
                        <div className='flex flex-col justify-between'>
                            <h2 className=' text-xl font-extrabold'>AI-based optimizations</h2>
                            <p>Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi.</p>
                        </div>
                    </motion.div>
                    <div className=' mt-10'>
                    <button className=' bg-white px-9 py-7 rounded-xl flex border
                     border-gray-200 shadow-sm hover:border-teal-500 hover:text-teal-500 hover:scale-95'>
                                    <span className=' mr-2' >Learn more</span>
                                    <span>➔</span>
                    </button>
                    </div>

                </div>    
            </div>
        </motion.div>
    )
}

export default ThirdStep;