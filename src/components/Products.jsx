import React from 'react'

const Products = (props) => {
    const Product = props.props ;
    console.log(Product.category)
  return (
    <>

            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={Product.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
                <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                            <p >
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {Product.title}
                            </p>
                            </h3>
                        </div>
                <p className="text-sm font-medium text-gray-900">${Product.price}</p>
                </div>
    </>
  )
}

export default Products