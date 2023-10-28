import React from 'react'

import submit_waves_image from '@images/submit-waves.svg'

const SignupSection = () => {
  return (
    <section className="signup">
    <img className={submit_waves_image} src="images/submit-waves.svg" alt="" />


    <div className="content container">

        <h2>
            Get News Updates By Signup
        </h2>

        <form className="signup-form" target="_blank" method="post">

            <input className="signup-box" type="text" placeholder="username@domain.com" />
            <button className="submit-btn" type="submit">
                Subscribe <i className="fa-regular fa-arrow-up-right"></i>
            </button>

        </form>





    </div>





</section>
  )
}

export default SignupSection