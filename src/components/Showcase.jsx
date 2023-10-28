import React from 'react'

import img_showcase from '@images/showcase-img.svg'

const Showcase = () => {
  return (
    <section class="showcase">
    <div class="container">
        <div class="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a class="btn-yellow" href="consulting.html">Get Consulting<i
                    class="fa-regular fa-arrow-up-right"></i></a>
            <a class="btn-transparent" href="services.html">Learn More<i
                    class="fa-regular fa-arrow-up-right"></i></a>
            <img class="showcase-waves" src="images/showcase-waves.svg" alt="" />


        </div>
        <img src={img_showcase} alt="Buisness man wearing suite and carrying a tablet" />
    </div>
</section>
  )
}

export default Showcase