import { useState } from 'react';
import Head from 'next/head'
import NavbarHome from '../components/Navbar';
import CarouselHome from '../components/Carousel';
import Bgi from '../components/Bgi';
import Features from '../components/Features';
import HIW from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';


export default function Home() {
  return (    
    <div>     
      <NavbarHome/>
      <Bgi/>
      <Features/>
      <HIW/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
