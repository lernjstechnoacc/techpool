import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Header/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Contact