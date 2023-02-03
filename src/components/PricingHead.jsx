import React from "react";
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'


const PricingHead = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visable'
      viewport={{amount: 0.2}}
      className=" py-32 bg-gradient-to-b from-slate-100   to-white md:mt-40">
      <div className=" max-w-[1280px] mx-auto flex flex-col items-center">
        <div className="max-w-[700px] flex flex-col items-center">
          <motion.h1 custom={1} variants={animate.Opacity} className=" text-6xl mb-6 md:text-4xl">Choose your plan</motion.h1>
          <motion.p custom={2} variants={animate.Opacity} className=" text-center md:text-base md:px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui
            tellus morbi integer neque, malesuada ac nulla tellus pharetra sit
            laoreet quis.
          </motion.p>
        </div>

        <motion.div custom={3} variants={animate.Bottom} className="flex justify-around w-full flex-wrap mt-14 lg:flex-col lg:space-y-5 sm:flex-row sm:space-y-5">
          <div className=" cart hover:scale-95 bg-white p-6 pt-4 rounded-2xl shadow-md border flex items-center justify-around border-slate-100 max-w-[340px] lg:max-w-full lg:mx-3 sm:max-w-[340px]">
            <div className=" h-[700px] flex flex-col justify-around lg:flex-row lg:space-x-5 lg:h-auto sm:flex-col sm:space-x-0">
              <div>
                <div className=" mb-3 relative">
                  <img
                    className=" w-[70px] rounded-2xl"
                    src="/logoPriceStandart.svg"
                    alt=""
                  />
                </div>
                <h2 className=" text-3xl font-bold mb-4">Startup</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl font-bold my-2">$ 99.00 USD</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="flex flex-col h-full justify-around lg:justify-between lg:h-auto sm:h-full sm:justify-around">
                <ul className=" space-y-4 mt-4 md:text-base">
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      All Build features
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Up to 1,000 email contacts
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3  bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Mobile App
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Normal Support
                    </h1>
                  </li>
                </ul>
                <button className="  bg-teal-500 px-6 py-4 rounded-xl flex justify-center hover:bg-teal-700 hover:scale-95 sm:mt-4">
                  <span className=" text-white">Get started</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" cart hover:scale-95 bg-teal-500 p-6 pt-4 relative rounded-2xl shadow-md flex items-center justify-around max-w-[340px] lg:max-w-full lg:mx-3 sm:max-w-[340px]">
            <div className=" h-[700px] flex flex-col justify-around lg:flex-row lg:space-x-5 lg:h-auto sm:flex-col sm:space-x-0">
              <div>
                <div className=" mb-3  ">
                  <img
                    className=" w-[70px]  rounded-2xl"
                    src="/logoPriceGrowth.svg"
                    alt=""
                  />
                  <div className=" bg-white absolute top-4 rounded-xl right-4 px-6 py-3 lg:right-[50%] md:text-base md:px-4 md:py-2 sm:right-4">
                    Featured
                  </div>
                </div>
                <h2 className=" text-3xl text-white font-bold mb-4">Growth</h2>
                <p className=" text-sm text-white">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl text-white  text-whitefont-bold my-2">
                  $ 199.00 USD
                </h2>
                <p className=" text-sm text-white">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="flex flex-col h-full justify-around lg:justify-between lg:h-auto sm:h-full sm:justify-around">
                <ul className=" space-y-4 mt-4 text-white md:text-base">
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-white text-teal-500 rounded-full">
                        ✔
                      </span>
                      Everything on Startup
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-white text-teal-500 rounded-full">
                        ✔
                      </span>
                      Up to 10,000 email contacts
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3  bg-white text-teal-500 rounded-full">
                        ✔
                      </span>
                      All Sending features
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-white text-teal-500 rounded-full">
                        ✔
                      </span>
                      Dedicated Support
                    </h1>
                  </li>
                </ul>
                <button className=" bg-white px-6 py-4 rounded-xl flex justify-center  hover:scale-95 sm:mt-4">
                <span className=" text-teal-500">Get started</span>
              </button>
              </div>

              
            </div>
          </div>
          <div className=" cart hover:scale-95 bg-white p-6 pt-4 rounded-2xl shadow-md border flex items-center justify-around border-slate-100 max-w-[340px] lg:max-w-full lg:mx-3 sm:max-w-[340px]">
            <div className=" h-[700px] flex flex-col justify-around lg:flex-row lg:space-x-5 lg:h-auto sm:flex-col sm:space-x-0">
              <div>
                <div className=" mb-3 relative">
                  <img
                    className=" w-[70px] rounded-2xl"
                    src="/logoPriceEnterprise.svg"
                    alt=""
                  />
                </div>
                <h2 className=" text-3xl font-bold mb-4">Enterprise</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
                <div className=" h-[1px] bg-slate-300 my-7 "></div>
                <h2 className=" text-3xl font-bold my-2">$ 399.00 USD</h2>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet dolorol consadipis elit sed do
                  eiusmod
                </p>
              </div>
              <div className="flex flex-col h-full justify-around lg:justify-between lg:h-auto sm:h-full sm:justify-around">
                <ul className=" space-y-4 mt-4 md:text-base">
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Everything on Growth
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Up to 100,000 email contacts
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3  bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      All Report features
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <span className=" px-2 py-1 mr-3 bg-teal-500 text-white rounded-full">
                        ✔
                      </span>
                      Premium Support
                    </h1>
                  </li>
                </ul>
                <button className=" bg-teal-500 px-6 py-4 rounded-xl flex justify-center hover:bg-teal-700 hover:scale-95 sm:mt-4">
                <span className=" text-white">Get started</span>
              </button>
              </div>

            
            </div>
          </div>
        </motion.div>

        <motion.div custom={6} variants={animate.Opacity} className=" max-w-xl rounded-3xl  bg-slate-100 mt-36 p-16 md:p-11 md:mx-3">
            <div className="flex items-center">
                <div className=" mr-5 w-full sm:w-38">
                <img className=" rounded-xl w-20 sm:w-full " src="/config.svg" alt="" />
                </div>
               
                <div className="flex flex-col justify-around">
                    <h2 className=" text-xl font-bold sm:text-lg">Need a custom plan for your company?</h2>
                    <p className=' text-base sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus nunc ipsum ornare adipiscing fringilla lacinia pharetra congue nisl.</p>
                    <a href="">Contact us ➔</a>

                </div>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingHead;
