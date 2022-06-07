import React from 'react'
import './Theme.css'

const Theme = ({title, image, cont}) => {
  return (
    <>
    <div className="sect-tech">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="section">
            <img className="img-blog" src={image} alt="terminal" />
        </div>
        <div className="cont">
            {/* <h2>What were my first steps?</h2> */}
            <h2>{cont}</h2>
        </div>
    </div>
   </>
  )
}

export default Theme