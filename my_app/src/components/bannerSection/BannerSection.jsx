import React from 'react'
import './bannerSection.css'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'

export default function BannerSection() {
  return (
    <>
    <section className='banner-section'>
        <Navbar/>
        <Hero/>
    </section>
    </>
  )
}
