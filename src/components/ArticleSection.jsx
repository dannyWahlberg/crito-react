import React from 'react'


import article_one_picture from '@images/article-one-picture.png'
import article_two_picture from '@images/article-two-picture.png'
import article_three_picture from '@images/article-three-picture.png'
import left_dot_image from '@images/left-dot-image.svg'

const ArticleSection = () => {
  return (
    <section className="article-and-news">

    <div className="container">

        <div className="top-content">
            <div className="section-title">
                <p>
                    Article & News
                </p>
                <h2>
                    Get Every Single Articles & News
                </h2>
            </div>
            <a className="btn-transparent" href="#">Browse Articles<i
                    className="fa-regular fa-arrow-up-right"></i></a>
        </div>

        <div className="content">

            <div className="article-box">

               <a href="#"><img src={article_one_picture} alt="a woman sitting in a restroom" />

                <p>Business</p>
                <h3>
                    How To Use Digitalization In The Classroom
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>
            </a>
            </div>

            <div className="article-box">

               <a href="#"> <img src={article_two_picture} alt="" />

                <p>Business</p>
                <h3>
                    How To Implement Chat GPT In Your Projects
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>
            </a>
            </div>

            <div className="article-box">

               <a href="#"> <img src={article_three_picture} alt="" />


                <p>Business</p>
                <h3>
                    The Guide To Support Modern CSS Design
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>
            </a>
            </div>

        </div>

        <div className="btn-container">
            <div className="btn-left"><img src={left_dot_image} alt="" /></div>
        </div>

    </div>

</section>
  )
}

export default ArticleSection