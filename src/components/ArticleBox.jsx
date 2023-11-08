import React from 'react'

const ArticleBox = (img,  title, info, content) => {
  return (
    <div className="article-box">

    <a href="#"><img src={img} alt="" />

     <p>{title}</p>
     <h3>
         {info}
     </h3>
     <p>
         {content}
     </p>
 </a>
 </div>
  )
}


<ArticleBox   />

export default ArticleBox