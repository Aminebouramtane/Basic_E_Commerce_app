import React, { useEffect, useState } from 'react'
import Products from './Products'


const ListCard = () => {
    const[products,setProducts]=useState("");
    const[category,setCategory]=useState("");
    const url = "https://fakestoreapi.com/products";
    const getByCategory = (category)=>{
        fetch(`${url}/category/${category}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }
    useEffect(
        ()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>setProducts(data))
            fetch(`${url}/categories`)
            .then(res=>res.json())
            .then(data2=>setCategory(data2))
        },[]
    )
  return (
    <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
                {
                    category && category.map(
                        (data)=>{
                            return(
                                <>
                                    <button className='btn btn-info mr-10' onClick={()=>{getByCategory(data)}}>{data}</button>
                                </>
                            )
                        }
                    )
                }
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products && products.map(
                            (Product)=>{
                                return(
                                        <div class="row row-cols-1 row-cols-md-1 g-4" key={Product.id}>
                                            <Products props={Product} />
                                        </div>
                                )
                            }
                        )                
                    }
                </div>
            </div>
        </div>

    </>
  )
}

export default ListCard