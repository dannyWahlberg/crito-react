import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/ShowcaseSectionHome'
import Partners from '@components/PartnerSection'
import FeaturesSection from '@components/FeaturesSection'
import AboutSection from '@components/AboutSection'
import ServiceSection from '@components/ServiceSection'
import WhyUsSection from '@components/WhyUsSection'
import ProjectCaseSection from '@components/ProjectCaseSection'
import TeamSection from '@components/TeamSection'
import ArticleSection from '@components/ArticleSection'
import SignupSection from '@components/SignupSection'

const Home = () => {
  return (
    <div className='wrapper-grid'>
     
     <Header style={{gridArea: 'header'}} />
      <div className="main" style={{gridArea: 'main'}}>
      
      <Showcase />
      <Partners />
      <FeaturesSection />
      <AboutSection />
      <ServiceSection />
      <WhyUsSection />
      <ProjectCaseSection />
      <TeamSection />
      <ArticleSection />
      <SignupSection />
      </div>

  









      <Footer style={{gridArea: 'footer'}} />
     

    </div>
  )
}

export default Home