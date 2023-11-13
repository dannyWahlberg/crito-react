import React from 'react'
import { Link } from 'react-router-dom'
import showcase_waves from '@images/showcase-waves.svg'

const ShowcaseSectionContact = () => {
  return (
    <div className="showcase-contact">

    <div className="content container">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact" className="active">Contact</Link>
        </nav>

        <h1>
            Let's Connect
        </h1>
        <img className="showcase-waves" src={showcase_waves} alt="" />
    </div>

</div>
  )
}

export default ShowcaseSectionContact