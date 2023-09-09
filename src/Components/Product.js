import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Product({name,price,image1,image2,id,ready,description,ships}) {
    const [hover, setHover] = useState(false)
  return (
    <div className='flex  flex-col justify-center w-fit h-fit mb-9 pl-8'>
      <Link to={`/collections/all-apparel/products/${id}`} 
      onMouseOver={()=>{setHover(true)} } 
      onMouseOut={()=>{setHover(false)}} state={{
        name:name,
        price:price,
        image1:image1,
        image2:image2,
        ready:ready,
        description:description,
        ships:ships
      }}>
        <img src={hover? image2: image1} className='w-80 h-80' loading='lazy'/></Link>
      <div className='flex flex-col py-8 w-full h-fit'>
    <p className='flex justify-center mb-1 pb-2 '>{name}</p>
    <p className='flex justify-center mb-1'>{price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</p>
      </div>
    </div>
  )
}
