import React from 'react'

const Subscribe = () => {
    return (
        <div className=' bg-teal-100'>
            <div className="container max-w-[1280px] p-10 mx-auto flex flex-wrap">
                    <h1 className='basis-1/2 text-5xl text-white'>Take your email marketing game to the next level</h1>
                    <div className='basis-1/2 flex flex-col'>
                        <div className=' px-4 rounded-xl bg-white py-4 mb-4 border border-zinc-200 hover:border-teal-500'>
                                <form className='flex w-full' action="">
                                    <input className=' flex-auto focus:border-0' placeholder='Enter your email' type="text" />
                                    <button className=' bg-teal-500 px-6 py-4 rounded-xl flex  hover:bg-teal-700 hover:scale-95'>
                                        <span className=' text-white'>Get started</span>
                                    </button>
                                </form>
                        </div>
                       
                    </div>
            </div>
        </div>
    )
}

export default Subscribe;