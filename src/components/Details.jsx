import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const[data,setData]=useState();
    const paramsid = useParams();
    useEffect(
        ()=>{
            fetch(`https://fakestoreapi.com/products/${paramsid.productId}`)
            .then((res)=>res.json())
            .then((data)=>setData(data))
        },[]
        );
    console.log(data);
  return (
    <>
        <div className="card mb-3">
              <div className="row g-0">
                  <div className="col-md-4">
                      <img src={data && data.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">{data && data.title}</h5>
                          <p className="card-text">{data && data.description}</p>
                          <p className="card-text"><small className="text-muted">${data && data.price}</small></p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Details