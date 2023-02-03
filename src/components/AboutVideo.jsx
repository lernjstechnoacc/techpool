import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const AboutVideo = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className='  bg-slate-200 py-36 my-10'>
            <div className=' max-w-[1280px] mx-auto flex flex-col items-center'>
                <div className='flex w-full flex-wrap justify-center mb-5'>
                    <motion.h1 custom={1} variants={animate.Opacity} className=' text-4xl max-w-[500px] md:text-2xl sm:text-center sm:px-2'>Watch the video about our company</motion.h1>
                    <motion.p custom={1} variants={animate.Opacity} className=' max-w-[500px]  md:text-base md:text-center md:p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui tellus morbi integer neque, malesuada ac nulla tellus pharetra sit laoreet quis aenean ornare volutpat.</motion.p>
                </div>
                <div className=' w-auto flex items-center justify-center '>
                
                    <motion.img custom={1} variants={animate.Bottom} className=' video w-2/3 h-2/3 sm:w-3/4  rounded-3xl border cursor-pointer hover:scale-95 hover:border-teal-500   ' src="/video.svg" alt="" />
       
              
                </div>
                
                

            </div>
        </motion.div>
    )
}

export default AboutVideo