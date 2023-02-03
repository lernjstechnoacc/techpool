import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const NumbersSection = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className=' pt-52 py-36'>
                <div className='container flex flex-col items-center max-w-[1280px] mx-auto px-6'>
                    <motion.h1 custom={1} variants={animate.Opacity} className=' text-6xl mb-12 md:text-4xl sm:p-3 sm text-center'>Our results in numbers</motion.h1>
                    <div className=' flex w-full flex-wrap justify-around'>
                        <motion.div custom={2} variants={animate.Bottom} className=' flex flex-col items-center p-4'>
                            <h1 className='text-6xl pb-3'>$300<span className='text-teal-500'>m</span></h1>
                            <span className=' text-center'>Venture capital raised</span>
                        </motion.div>
                        <motion.div custom={3} variants={animate.Bottom} className=' flex flex-col items-center p-4'>
                            <h1 className='text-6xl pb-3'>2016<span className='text-teal-500'>y</span></h1>
                            <span className=' text-center'>Founded since 2016</span>
                        </motion.div>
                        <motion.div custom={4} variants={animate.Bottom} className=' flex flex-col items-center p-4'>
                            <h1 className='text-6xl pb-3'>40<span className='text-teal-500'>+</span></h1>
                            <span className=' text-center'>Amazing team members</span>
                        </motion.div>
                        <motion.div custom={5} variants={animate.Bottom} className=' flex flex-col items-center p-4'>
                            <h1 className='text-6xl pb-3'>32,614<span className='text-teal-500'>+</span></h1>
                            <span className=' text-center'>Active users and growing</span>
                        </motion.div>

                    </div>

                </div>
        </motion.div>
    )
}

export default NumbersSection