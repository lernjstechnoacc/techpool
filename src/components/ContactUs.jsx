import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const ContactUs = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
        className=' bg-slate-100 py-20 mb-14 md:mt-40'>
            <div className=' max-w-[1280px] mx-auto px-4'>
                <div className='flex flex-wrap lg:items-center'>
                    <div className=' w-1/2 flex flex-col space-y-4 mb-6 lg:w-full lg:items-center '>
                        <motion.h1 custom={1} variants={animate.Opacity} className=' text-6xl font-bold'>Contact us</motion.h1>
                        <motion.p custom={2} variants={animate.Opacity}>Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, sed do eiusmod tempor.</motion.p>
                        <div className='w-full flex flex-col space-y-4 '>
                            <motion.div custom={3} variants={animate.Bottom} className='flex max-w-[380px] bg-white px-5 py-6 rounded-xl border hover:border-teal-500 cart hover:scale-95'>
                                <img className='mr-5 rounded-xl w-[70px]' src="/emailContact.svg" alt="" />
                                <div className=' space-y-4'>
                                    <h1 className=' text-2xl font-bold'>Email us</h1>
                                    <span className=' text-base'>contact@techpool.com</span>
                                </div>
                            </motion.div>
                            
                            <motion.div custom={3} variants={animate.Bottom} className='flex max-w-[380px] bg-white px-5 py-6 rounded-xl border hover:border-teal-500 cart hover:scale-95'>
                                <img className='mr-5 rounded-xl w-[70px]' src="/phoneContact.svg" alt="" />
                                <div className=' space-y-4'>
                                    <h1 className=' text-2xl font-bold'>Call us</h1>
                                    <span className=' text-base'>(044) - 444 - 4444</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div custom={3} variants={animate.Bottom} className=' bg-white p-10 flex justify-center rounded-2xl lg:w-full'>
                        <form className='flex flex-col items-center '>
                            <div className='flex space-x-4 mb-4 '>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block text-xl font-extrabold md:text-lg'  htmlFor="name">Name</label>
                                    <input className='text-base p-5 py-4 rounded-xl border  hover:border-teal-500 border-slate-200 md:p-2  sm:text-sm sm:w-[90%]' placeholder='John Carter' name='name' type="text" />
                                </div>
                                <div className=' w-1/2 space-y-2 mb-3'>
                                    <label className=' block text-xl font-extrabold md:text-lg ' htmlFor="email">Email</label>
                                    <input className='text-base p-5 py-4 rounded-xl border hover:border-teal-500 border-slate-200  md:p-2 sm:text-sm sm:w-[90%]' placeholder='example@mail.com' name='email' type='email' />
                                </div>               
                            </div>
                            <div className='flex  space-x-4 mb-4 md:space-x-0'>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block text-xl font-extrabold md:text-lg'  htmlFor="phone">Phone</label>
                                    <input className=' text-base p-5 py-4 rounded-xl border hover:border-teal-500 border-slate-200 md:p-2 sm:text-sm sm:w-[90%]'  placeholder='(044) 444 4444' name='phone' type="text" />
                                </div>
                                <div className=' w-1/2 space-y-2'>
                                    <label className=' block text-xl font-extrabold md:text-lg ' htmlFor="company">Company</label>
                                    <input className=' text-base p-5 py-4 rounded-xl border hover:border-teal-500 border-slate-200 md:p-2 sm:text-sm sm:w-[90%]' placeholder='ex. Facebook' name='company' type="text" />
                                </div>              
                            </div>
                            <div className=' space-y-2 mt-2'>
                                    <label className=' block text-xl font-extrabold  md:text-lg' htmlFor="text">Message</label>
                                    <textarea className=' text-base p-5 w-full h-[100px] rounded-xl border hover:border-teal-500 border-slate-200 md:p-2 sm:text-sm sm:w-[90%]' name="text" id="" cols="50" rows="5"></textarea>
                            </div>

                            <div className='flex w-full justify-end'>
                            <button className=' bg-teal-500 px-6 py-4 rounded-xl flex hover:bg-teal-700 hover:scale-95 '>
                                <span className=' text-white'>Submit</span>
                            </button>
                            <div>

                            </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactUs