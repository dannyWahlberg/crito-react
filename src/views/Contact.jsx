import ContactUsSection from '@components/ContactUsSection'
import Footer from '@components/Footer'
import Header from '@components/Header'
import ShowcaseSectionContact from '@components/ShowcaseSectionContact'
import React from 'react'

const Contact = () => {
  return (
    <div className='wrapper-grid'>
        <Header />

        <div className="main">
        
        <ShowcaseSectionContact />
        <ContactUsSection />

        </div>

        <Footer />
        </div>
  )
}

export default Contact