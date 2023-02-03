import React, { useState } from 'react'
import {  motion } from "framer-motion"
import * as animate from '../config/animateConfig'

const ReviewCustomers = () => {
    const[customers, setCustomers] = useState(
        [
        {id:1, name: 'Lilly Allen', position: 'VP of Marketing', title: '“The best email marketing tool”', review: 'Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit amet mauris in aliquam sem fringilla ut morbi tincidunt dis parturient montes nascetur ridiculus', logo: '/lily.svg', reviewFromLogo:'/facebook.svg'},
        {id:2, name: 'Michael Scott', position: 'Head of Email', title: '“The best email marketing tool”', review: 'Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit amet mauris in aliquam sem fringilla ut morbi tincidunt dis parturient montes nascetur ridiculus', logo: '/scott.svg', reviewFromLogo:'/google.svg'},
        {id:3, name: 'Anne Williams', position: 'Inbound Lead', title: '“The best email marketing tool”', review: 'Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit amet mauris in aliquam sem fringilla ut morbi tincidunt dis parturient montes nascetur ridiculus', logo: '/anne.svg', reviewFromLogo:'/youtube.svg'}
        ]
    );
    
    const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

    const onClickSelectCustomer = (customer) =>{
        if(selectedCustomer.id === customer.id){
            return false;
        }
        setSelectedCustomer(selectedCustomer => customer);
    }
    return (
        <motion.div
        initial='hidden'
        whileInView='visable'
        viewport={{amount: 0.2}}
         className='py-[200px]'>
            <div className="container max-w-[1100px] mx-auto flex flex-col items-center">
                <motion.h1 custom={1} variants={animate.Opacity} className=' max-w-[500px] text-4xl font-bold text-center mb-12'>Hear what our amazing customers say about us</motion.h1>
                <motion.div custom={2} variants={animate.Opacity} className='max-w-[95%] rounded-xl border shadow-md border-slate-300  py-20 px-16 flex flex-wrap md:mx-2 md:p-3 '>
                    <div className=' max-w-1/2 flex items-center '>
                    <img className=' w-10/12 h-10/12  rounded-full md:w-2/3' src={selectedCustomer.logo} alt={selectedCustomer.name} />
                    </div>
                    <div className='max-w-1/2 flex flex-col items-center space-y-6 md:space-y-4' >
                        <h1 className='mt-4 text-3xl md:text-xl'>{selectedCustomer.title}</h1>
                        <p className='mb-4 md:text-base sm:text-xs'>{selectedCustomer.review}</p>
                        <div className='flex w-full flex-wrap justify-between items-center'>
                            <div className='flex flex-col items-start '>
                                <h1 className=' font-bold text-2xl mb-2'>{selectedCustomer.name}</h1>
                                <h2 >{selectedCustomer.position}</h2>
                            </div>
                            <div className='mt-2'>
                                <img src={selectedCustomer.reviewFromLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>
               
               <div className='flex flex-wrap w-full justify-around mt-14 sm:flex-col'>
                  {customers.map(customer => {
                    let seletedStyle = 'w-4/12  p-4 m-4 flex  justify-center mx-auto text-extrabold';
                    let style = 'customer w-4/12 p-4 m-4 flex  justify-center mx-auto opacity-60 hover:-translate-y-2';
                    return (
                        <motion.div custom={3} variants={animate.Opacity} key={customer.id} onClick={()=> onClickSelectCustomer(customer)} className={customer.id === selectedCustomer.id ? seletedStyle : style}>
                            <img className='w-[80px] h-[80px] rounded-full mr-4 md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px]' src={customer.logo} alt="" />
                            <div className='flex flex-col '>
                                <h1 className=' font-bold lg:text-base sm:text-sm'>{customer.name}</h1>
                                <span className=' text-base lg:text-sm sm:text-xs'>{customer.position}</span>
                            </div>
                        </motion.div>
                        
                    )
                  })}
               </div>

            </div>
        </motion.div>
    )
}

export default ReviewCustomers