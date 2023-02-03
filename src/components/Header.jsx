import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const HeaderMotion = {
    hidden: {
        opacity: 0,
    },
    visable: {
        opacity: 1,
    }
} 

const Header = () => {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const buregerClick = (event) =>{
        let burgerMenu = document.getElementById('menu');
        if(event.target.tagName === 'SPAN'){
            event.target.parentElement.classList.toggle('active');
            burgerMenu.classList.toggle('-z-20');
            burgerMenu.classList.toggle('opacity-0');
            burgerMenu.classList.toggle('translate-x-full');
        }else{
            event.target.classList.toggle('active')
            burgerMenu.classList.toggle('-z-20');
            burgerMenu.classList.toggle('opacity-0');
            burgerMenu.classList.toggle('translate-x-full');
        }
     

    }
    return (
        <motion.header 
            initial='hidden'
            whileInView='visable'
        
            className='py-8 relative'>
            <div className="container max-w-[1280px] px-6 mx-auto flex">
                <Link href='/' className=' flex items-center hover:scale-95'>
                <img className=' mr-10' src="/logo.svg" alt="logo" />
                </Link>
                <ul className='flex space-x-8 items-center flex-1 md:hidden'>
                    <li className=' hover:text-teal-500'><Link href="/">Home</Link></li>
                    <li className=' hover:text-teal-500'><Link href="/about">About</Link></li>
                    <li className=' hover:text-teal-500' > <Link href="/pricing">Pricing</Link></li>
                    <li className=' hover:text-teal-500'><Link href="/contact">Contact</Link></li>
                </ul>
                <div className='flex items-center justify-center md:justify-end  md:w-full'>
                <button className=' bg-teal-500 px-6 py-4 rounded-xl flex hover:bg-teal-700 hover:scale-95 md:hidden'>
                    <span className=' text-white'>Get started</span>
                    <span className=' text-white'>➔</span>
                </button>
                 <button onClick={buregerClick} className={'burger hidden md:block'}>
                        <span className='burger-line top-line'></span>
                        <span className='burger-line mid-line'></span>
                        <span className='burger-line bottom-line'></span>
                 </button>
                 <ul id='menu' className=' -z-20 flex-col opacity-0 translate-x-full w-1/2 absolute top-20 px-3 left-0 space-y-4 items-start flex-1'>
                    <li className=' hover:text-teal-500'><Link href="/">Home</Link></li>
                    <li className=' hover:text-teal-500'><Link href="/about">About</Link></li>
                    <li className=' hover:text-teal-500' > <Link href="/pricing">Pricing</Link></li>
                    <li className=' hover:text-teal-500'><Link href="/contact">Contact</Link></li>
                </ul>
                </div>
              
            </div>
        </motion.header>
    )
}

export default Header