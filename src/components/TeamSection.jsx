import React from 'react'


import kristine_photo from '@images/kristine-photo.png'
import mark_photo from '@images/mark-photo.png'
import kimberly_photo from '@images/kimberly-photo.png'
import justin_photo from '@images/justin-photo.png'
import cassandra_photo from '@images/cassandra-image.png'
import jack_photo from '@images/jack-image.png'
import amanda_photo from '@images/amanda-image.png'
import dots_image from '@images/dots-image.svg'
import stars_raiting_image from '@images/stars-raiting.svg'

const TeamSection = () => {
  return (
    <section className="meet-our-team">

    <div className="content container">
        <div className="small-header">
            <div className="section-title">
                <p>Meet Our Team</p>
                <h2>Experience Team Members</h2>
            </div>
            <button className="btn-yellow">Browse Team<i className="fa-regular fa-arrow-up-right"></i></button>
        </div>
        <div className="photos">
            <div className="photo-container">
                <img src={kristine_photo} alt="photo of kristine palmer" />
                <p className="name">Kristine Palmer</p>
                <p className="title">Cheif Operation Officer</p>

            </div>

            <div className="photo-container">
                <img src={mark_photo} alt="photo of mark Aubri" />
                <p className="name">Mark Aubri</p>
                <p className="title">Senior Consultant</p>

            </div>

            <div className="photo-container">
                <img src={kimberly_photo} alt="photo of kimberly hansen" />
                <p className="name">Kimberly Hansen</p>
                <p className="title">Senior Consultant</p>

            </div>

            <div className="photo-container">
                <img src={justin_photo} alt="photo of justin willoman" />
                <p className="name">Justin Willoman</p>
                <p className="title">Senior Tech Consultant</p>

            </div>

        </div>
        <div className="dots-container"> <img src={dots_image} alt="" /></div>
    </div>
    <div className="testimonial">

        <div className="section-title">
            <p>Testimonial</p>
            <h2>What Our Clients Says</h2>
        </div>

        <div className="client-testimonials">
            <div className="testimonial-box">
                <img className="stars" src={stars_raiting_image} alt="stars showing raiting" />
                <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                    voluptate"
                </p>
                <div className="person">
                    <img src={cassandra_photo} alt="photo of cassandra" />
                    <div>
                        <p className="name">Cassandra Warren</p>
                        <p className="title">Business Manager, Dorfus</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-box">
                <img className="stars" src={stars_raiting_image} alt="stars showing raiting" />
                <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                    voluptate"
                </p>
                <div className="person">
                    <img src={amanda_photo} alt="photo of amanda" />
                    <div>
                        <p className="name">Amanda Tulling</p>
                        <p className="title">Senior Developer, Square</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-box">
                <img className="stars" src={stars_raiting_image} alt="stars showing raiting" />
                <p>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                    dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                    voluptate"
                </p>
                <div className="person">
                    <img src={jack_photo} alt="photo of jack" />
                    <div>
                        <p className="name">Jack McDogglas</p>
                        <p className="title">Key Account Manager, Gobona</p>
                    </div>
                </div>
            </div>

        </div>
        <a className="btn-black" href="#">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>



    </div>










</section>
  )
}

export default TeamSection