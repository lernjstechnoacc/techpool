import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'



const HeroEmail = () => {
    return (
      <motion.div 
        initial='hidden'
        whileInView='visable'
        className=' mb-12'
      >
            <div className="container max-w-[1280px] mx-auto flex flex-wrap p-6">
                <div className=' w-1/2 pt-[160px] flex flex-col lg:items-center lg:w-full'>
                    <motion.h1 
                     custom={1}
                     variants={animate.Opacity}
                    className=' text-6xl font-bold mb-6 sm:text-4xl md:px-4'>All-in-one email marketing platform</motion.h1>
                    <motion.p
                    custom={2}
                    variants={animate.Opacity} 
                    className=' mb-9'>Lorem ipsum dolor sit amet consectetur adipiscing elit lorem tristique cras ullamcorper est pharetra at sit condimentum sed arcu etiam aliquam.</motion.p>
                    <div className=' px-4 rounded-xl py-4 mb-4 border border-zinc-200 hover:border-teal-500'>
                            <form className='flex w-full' action="">
                                <input className=' flex-auto focus:border-0' placeholder='Enter your Email' type="text" />
                                <button className=' bg-teal-500 px-6 sm:px-5 py-4 sm:py-3 rounded-xl flex  hover:bg-teal-700 hover:scale-95'>
                                    <span className=' text-white sm:text-sm'>Get started</span>
                                </button>
                            </form>
                    </div>
                    <motion.div
                    custom={1} 
                    variants={animate.Left}
                    
                    
                    className=''>
                        <span className=' px-2 py-1 mr-3 bg-teal-500 text-white rounded-full'>✔</span>
                        <span className=' font-bold'>No credit card required</span>
                    </motion.div>
                </div>
                <div className=' w-1/2 flex justify-center items-center pt-12 lg:justify-center lg:w-full'>
                    <motion.img custom={2} variants={animate.Opacity} className=' w-[500px] h-[500px]' src="/hero-email.svg" alt="" />
                </div>
            </div>
            
        </motion.div>
    )
}

export default HeroEmail