import React from 'react'
import './testimonial.css'
import colons from '../../containers/testimonials/testimonials-assets/colons.png'

const Testimonial = ({image,text,name,profession}) => {
 
    return (


    <div className="Testimonial">

        <div className="left">
          <div className="image"><img src={image} /></div>
          <div className="colons"><img src={colons} /></div>
        </div>

        <div className="right">
            <div className="Text">{text}</div>
            <div className="Name">{name}</div>
            <div className="Profession">{profession}</div>
        </div>

    </div>

  )
}

export default Testimonial