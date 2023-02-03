import React from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const AboutHead = () => {
    return (
      <motion.div
      initial='hidden'
      whileInView='visable'
      viewport={{amount: 0.2}}
       className=" max-w-[1280px] mx-auto">
        <div className=" my-20 max-w-[750px] mx-auto flex flex-col items-center md:mt-36">
          <motion.h1 custom={1} variants={animate.Opacity} className=" mb-6 text-6xl font-bold md:text-center md:mx-4">About our company</motion.h1>
          <motion.p custom={2} variants={animate.Opacity} className=" text-center mb-8 md:mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui
            tellus morbi integer neque, malesuada ac nulla tellus pharetra sit
            laoreet quis aenean ornare volutpat bibendum at vitae nisl quisque
            convallis ac.
          </motion.p>
          <div className="flex h-16 space-x-4">
            <motion.button custom={3} variants={animate.Opacity} className="  bg-teal-500 px-8 py-2 rounded-xl flex items-center hover:bg-teal-700 hover:scale-95 ">
              <span className=" text-white">Join our team </span>
              <span className=" text-white">➔</span>
            </motion.button>
            <motion.button custom={3} variants={animate.Opacity}
              className=" bg-white px-5 rounded-xl flex items-center border
                     border-gray-200 shadow-sm hover:border-teal-500 hover:text-teal-500 hover:scale-95"
            >
              <span className=" mr-2">Learn more</span>
              <span>➔</span>
            </motion.button>
          </div>
        </div>
        <div className=' block relative w-full m-6  mt-14 '>
            <motion.img custom={5} variants={animate.Left} className='motion-img rounded-3xl w-2/3 h-[60%]' src="/aboutheadImg1.jpeg" alt="" />
            <motion.img custom={6} variants={animate.Right} className='motion-img rounded-3xl w-[60%] h-[75%]  absolute right-8 top-[40%]' src="/aboutheadImg2.jpeg" alt="" />         
        </div>
      </motion.div>
    );
}

export default AboutHead