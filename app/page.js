"use client"
import React from 'react'
import '../app/globals.css'
import '../app/universal.scss'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact'
function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}

export default Home