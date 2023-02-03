import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className="container max-w-[1280px] mx-auto px-4 flex flex-col">
                    <div className='flex flex-wrap p-10 justify-center items-center bg-slate-200 rounded-2xl md:justify-center'>
                        <div className='flex flex-wrap md:items-center md:justify-center'>
                        <div className=' w-1/2 min-w-[320px] p-2 flex items-center'>
                            <img className='w-16 h-16 rounded-2xl mr-3' src="/email.svg" alt="" />
                            <div className='flex flex-col'>
                                    <h1 className='font-bold text-2xl lg:text-xl'>Subscribe to our newsletter</h1>
                                    <p>Lorem ipsum dolor sit amet consecte</p>
                            </div>

                        </div>

                        <div className='w-1/2  flex items-center md:w-full'>
                        <div className=' px-4 w-full rounded-xl bg-white  border border-zinc-200 hover:border-teal-500 lg:px-2'>
                                <form className='flex w-full p-4 lg:p-2' action="">
                                    <input className=' flex-auto focus:border-0 md: w-3/4' type="text" placeholder='Enter your email' />
                                    <button className=' bg-teal-500 px-6 py-4 rounded-xl flex  hover:bg-teal-700 hover:scale-95 lg:px-4 lg:py-2'>
                                        <span className=' text-white lg:text-base md:text-xs'>Subscribe</span>
                                    </button>
                                </form>
                        </div>
                        </div>
                        </div>
                        
                       
                    </div>
                    

                    <div className='flex items-center justify-center py-8'>
                        <div>Copyright © Techpool X | Designed by <Link className=' text-teal-500 underline' href="https://brixtemplates.com/">BRIX Templates</Link> - Refactoring by Maroxovsky</div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;