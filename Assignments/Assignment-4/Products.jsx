import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [Product,setProduct]= useState([])
    useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products?limit5") //using ?limit number {it will limit the products in the link} 
    .then((response)=>{
        console.log(response.data)
        setProduct(response.data);
    })
    .catch((error)=>{
        console.log("Errors: "+error)
    })
},[]);
  return (
    <>
    <div className='container mt-4'>
        <h1 className='text-center md-4'>Products</h1>
        <div className='row '>
            {Product.map((p)=>(
                <div className='col-md-4 md-3' key={p.id}>
                    <div className='card-h-100 shadow-sw'>
                        <img src={p.image}
                        className='card-img-100'
                        style={{height: "200px", padding: "40px"}} />
                        <div className='card-body'>
                            <div>
                                <h1 className='card-tittle'>{p.title}</h1>
                                <p className='card text'>₨{p.price}</p>
                                <button className='btn btn-primary'>Buy Now</button>
                                </div>

                        </div>
                    </div>

                </div>
            ))}

        </div>
    </div>
    </>
  )
}

export default Product;
