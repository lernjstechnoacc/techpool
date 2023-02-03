import AboutHead from '@/components/AboutHead'
import AboutVideo from '@/components/AboutVideo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NumbersSection from '@/components/NumbersSection'
import Head from 'next/head'
import React from 'react'


const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Header/>
            <AboutHead/>
            <NumbersSection/>
            <AboutVideo/>
            <Footer/>
        </div>
    )
}

export default About