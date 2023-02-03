import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const SecondStep = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className=' pt-[200px] bg-slate-200'>
            <div className="container max-w-[1280px] mx-auto  flex  flex-wrap px-4 lg:flex-row-reverse lg:justify-end">
                <div className='w-1/2  flex flex-col lg:items-center lg:w-full  '>
                    <motion.h1 custom={1} variants={animate.Opacity} className=' text-5xl mb-5'>2. Send it to your email audience</motion.h1>
                    <motion.p custom={2} variants={animate.Opacity} className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.</motion.p>
                    <motion.div custom={6} variants={animate.Left} className='flex items-start justify-start mb-5'>
                        <img className=' rounded-2xl mr-6' src="second1.svg" alt="" />
                        <div className='flex flex-col justify-between'>
                            <h2 className=' text-xl text-teal-800 font-extrabold'>Delivery optimization</h2>
                            <p>Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus</p>
                        </div>
                    </motion.div>
                    <motion.div custom={6} variants={animate.Left} className='flex mb-5'>
                        <img className=' rounded-2xl mr-6' src="second2.svg" alt="" />
                        <div className='flex flex-col justify-between'>
                            <h2 className=' text-xl font-extrabold'>Advanced A/B testing</h2>
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
                <motion.div custom={3} variants={animate.Opacity} className='flex w-1/2 pt-12 lg:justify-center lg:w-full'>
                            <img className='w-[500px] h-[500px]'  src="/secondLogo.svg" alt="" />
                    </motion.div>   
            </div>
        </motion.div>
    )
}

export default SecondStep;