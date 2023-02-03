import EmailSend from '@/components/EmailSend';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroEmail from '@/components/HeroEmail';
import NavRov from '@/components/NavRow';
import ReviewCustomers from '@/components/ReviewCustomers';
import FirstStep from '@/components/FirstStep';
import SecondStep from '@/components/SecondStep';
import ThirdStep from '@/components/ThirdStep';
import Subscribe from '@/components/Subscribe';
import React from 'react'
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <HeroEmail/>
      <NavRov/>
      <FirstStep/>
      <SecondStep/>
      <ThirdStep/>
      <EmailSend/>
      <ReviewCustomers/>
      <Footer/>
    </div>
  )
}

export default HomePage;