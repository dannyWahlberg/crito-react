import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'
import construction_image from '@images/construction-image.png'

const Notfound = () => {
  return (
    <div className='wrapper-grid'>
    <Header style={{gridArea: 'header'}} />

       <div className="main">
        <div className="construction">
        <img className='construction-image' src={construction_image} alt="background image" />
        </div>

       </div>

<Footer style={{gridArea: 'footer'}} />
       </div>
  )
}

export default Notfound