import ContactUsSection from '@components/ContactUsSection'
import Footer from '@components/Footer'
import Header from '@components/Header'
import ShowcaseSectionContact from '@components/ShowcaseSectionContact'
import React from 'react'

const Contact = () => {
  return (
    <div className='wrapper-grid'>
     <Header style={{gridArea: 'header'}} />

        <div className="main">
        
        <ShowcaseSectionContact />
        <ContactUsSection />

        </div>

<Footer style={{gridArea: 'footer'}} />
        </div>
  )
}

export default Contact