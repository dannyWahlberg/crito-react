import React from 'react'

import dorfus_logo from '@images/dorfus-image.svg'
import paperz_logo from '@images/paperz-image.svg'
import martino_logo from '@images/martino-image.svg'
import square_logo from '@images/square-image.svg'
import gobona_logo from '@images/gobona-image.svg'

const Partners = () => {
  return (
    <section className="partners">
    <div className="container ">
        <img src={dorfus_logo} alt="company image of dorfus"/>
        <img src={paperz_logo} alt="company image of paperz"/>
        <img src={martino_logo} alt="company image of martino"/>
        <img src={square_logo} alt="company image of square"/>
        <img src={gobona_logo} alt="company image of gobona"/>
    </div>
    
</section>
  )
}

export default Partners