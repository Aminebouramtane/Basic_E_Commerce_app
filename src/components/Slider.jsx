import React from 'react'
import './Slider.css'
import Image1 from './blog/blog_1.jpg'
import Image2 from './blog/blog_2.jpg'
import Image3 from './blog/blog_3.jpg'

const Slider = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Image1} className="d-block w-100 height-500" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={Image2} className="d-block w-100 height-500" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={Image3} className="d-block w-100 height-500" alt="..."/>
            </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>    
    </>

  )
}

export default Slider