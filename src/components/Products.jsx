import React from 'react'
import { Link } from 'react-router-dom';

const Products = (props) => {
    const Product = props.props ;
    console.log(Product.category)
  return (
    <>
              <div className="col-4">
                <div className="card">
                  <img src={Product.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">${Product.price}</p>
                    <Link to={`details/${Product.id}`} className='btn btn-primary'>Primary</Link>
                  </div>
                </div>
              </div>
              
    </>
  )
}

export default Products