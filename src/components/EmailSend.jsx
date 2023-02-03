import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const EmailSend = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className=' bg-teal-500 py-[150px]'>
            <div className="container max-w-[1280px] px-6 mx-auto flex flex-wrap lg:justify-center lg:space-y-6">
                    <motion.h1 custom={1} variants={animate.Opacity} className='w-1/2 text-5xl mr-3 text-white lg:text-center lg:text-4xl'>Take your email marketing game to the next level</motion.h1>
                    <div className=' flex flex-col mx-auto'>
                        <div className=' px-4 rounded-xl bg-white py-4 mb-4 border border-zinc-200 hover:border-teal-500'>
                                <form className='flex w-full' action="">
                                    <motion.input custom={2} variants={animate.Opacity} className=' flex-auto focus:border-none' placeholder='Enter your email' type="text" />
                                    <button className=' bg-teal-500 px-6 py-4 rounded-xl flex  hover:bg-teal-700 lg:px-5 lg:py-3 hover:scale-95'>
                                        <span className=' text-white lg:text-base'>Get started</span>
                                    </button>
                                </form>
                        </div>
                        <motion.div custom={4} variants={animate.Left} className=''>
                            <span className=' px-2 py-1 mr-3 bg-white text-teal-700 rounded-full'>✔</span>
                            <span className=' text-white font-bold'>No credit card required</span>
                        </motion.div>
                    </div>
            </div>
        </motion.div>
    )
}

export default EmailSend