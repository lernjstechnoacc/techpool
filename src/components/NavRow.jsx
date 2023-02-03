import React from 'react'
import Link from 'next/link'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const NavRov = () => {
    return (
      <motion.div 
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
      className="py-24">
        <div className="container max-w-[1280px] mx-auto">
          <motion.h1 custom={1} variants={animate.Opacity} className="w-full text-center text-xl">
            Trusted by 10,000 companies around the world
          </motion.h1>
          <div className='flex items-center justify-between flex-wrap space-x-2 space-y-2 mt-9 px-4 lg:justify-around'>
          <motion.button custom={2} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="https://google.com/">
              <img src="/google.svg" alt="Google" />
            </Link>
          </motion.button>
          <motion.button custom={3} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="https://facebook.com/">
              <img src="/facebook.svg" alt="Facebook" />
            </Link>
            </motion.button>
            <motion.button custom={4} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="https://youtube.com/">
              <img src="/youtube.svg" alt="Youtube" />
            </Link>
            </motion.button>
            <motion.button custom={5} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="">
              <img src="/pint.svg" alt="Pint" />
            </Link>
            </motion.button>
            <motion.button custom={6} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="https://twitch.com/">
              <img src="/twitch.svg" alt="Twitch" />
            </Link>
            </motion.button>
            <motion.button custom={7} variants={animate.Opacity} className=' hover:scale-90'>
            <Link href="https://webflow.com/">
              <img src="/webflow.svg" alt="Webflow" />
            </Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
}

export default NavRov