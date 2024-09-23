import React from 'react'
import Hero from '../../component/Hero/Hero'
import Company from '../../component/company/Company'
import Navbar from '../../component/Navbar/Navbar'
import FAQ from '../../component/Faq/FAQ'
import Footer from '../../component/footer/Footer'
import Insites from '../../component/Insites/Insites'
import CandidateSearch from '../../component/CandidateSearch/CandidateSearch'
import WhyChoose from '../../component/whyChoose/WhyChoose'
import Payment from '../../component/Payment/Payment'

function Second() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Company/>
      <CandidateSearch/>
      <WhyChoose/>
      <Payment/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Second
