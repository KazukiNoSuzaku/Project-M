
'use client'
// import Link from 'next/link';
import Features from './spa-components/features';
import Homepage from './spa-components/homepage';
import Products from './spa-components/products';
import Sponsor from './spa-components/sponsor';
import Footer from './spa-components/footer';
import Recent from './spa-components/recent';
import { useEffect, useRef } from 'react';

import {  useParallax } from 'react-scroll-parallax';
import { Image } from '@nextui-org/react';
import NavbarX from './components/NavbarX';
import { Divider } from "@nextui-org/react";
import Contact from './spa-components/contact';
// import { Navbar } from '../ui/Navbar';
import React, { useState } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { url } from 'inspector';

export default function Home() {
  

  const [totalHeight, setTotalHeight] = useState<number>(0);

  useEffect(() => {
    const calculateTotalHeight = () => {

      const newTotalHeight = document.documentElement.scrollHeight;
      setTotalHeight(newTotalHeight);
    };

    calculateTotalHeight();

    return () => {

    };
  }, []); 



  return (
    <main className='dark'>     


          <NavbarX/>
        <div>
        <section id="home">
          <Homepage/>
        </section>
        <section id="features">
            <Features/>
        </section>
        <section id="services">
            <Products/>
        </section>
        <section id="contact" className="">
            <Contact/>
        </section>
        <Footer/>
        </div>
      
 
        

      
    </main>
  );
}
