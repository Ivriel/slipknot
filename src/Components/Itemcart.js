import React from 'react'
import { Link } from 'react-router-dom'
export default function Itemcart({id,id_product,name,price,size,quantity,image1,image2,ready,description,ships}) {
  return (
    <li className='border-b border-b-white mb-[15px] pb-[15px] flex w-full'>
        <div className='pl-[15px] mb-[15px]'>
          <Link to={`/collections/all-apparel/products/${id_product}`} state={{
        name:name,
        price:price,
        image1:image1,
        image2:image2,
        ready:ready,
        description:description,
        ships:ships
      }}><img src={image1} className='w-14 h-14'/></Link>
        </div>
        <div className='pl-[14px] w-full'>
        <div>
        <p>{name}</p>
  
        <p>{price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</p>
    <p>{size}</p>

        </div>
        
    <div className='mt-[4px] flex'>
    <button className=' px-2 py-1 flex justify-center w-8 h-8  font-bold text-[15px] text-center hover:bg-white hover:text-black cursor-pointer'>-</button>
        <input type='text' disabled value = {quantity} className='w-8 py-1 bg-black text-white text-center'/>
        <button className=' py-1 flex justify-center w-8 h-8  font-bold text-[15px] text-center hover:bg-white hover:text-black cursor-pointer'>+</button>
    </div>
        </div>

</li>
  )
}
