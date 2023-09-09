import React from 'react'
import {getProduct} from '../Helpers/database/database'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../Components/Product'
import Breadcrumb from '../Components/Breadcrumb'
import useScrolltoTop from '../Helpers/Hooks/useScrolltoTop'
function Loading() {
const dummydata = [
  {
    id:0,product:[]
},
{
  id:1,product:[]
},
{
  id:2,product:[]
}
]
return dummydata.map((item)=>{
  return (
    <div className='flex  flex-col justify-center w-fit h-fit mb-9 pl-8 animate-pulse' key={item.id}>
      <div className='flex justify-center items-center w-80 h-80 bg-gray-700 rounded'>
      <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
      </div>
      <div className='flex flex-col py-8 w-full h-fit'>
      <p className='flex justify-center mb-1 pb-2 w-full h-4 bg-gray-700 mt-[20px] rounded'></p>
      <p className='flex justify-center mb-1 w-full h-4 bg-gray-700 mt-[20px] rounded'></p>
      </div>
    </div>
  )
})
}
export default function Apparelpages() {
  const [isloading,setIsLoading] = useState(true)
  useScrolltoTop()
  const [item, setItem] = useState([])
  useEffect(() => {
    getProduct().then(res => {
      setItem(res)
      setIsLoading(false)
    })
  }, [])
  return (
    <div className='grid  bg-black text-white pt-32 h-fit w-full mt-[50px] '>
      <div className=' flex ml-[410px] mt-[50px]'>
          <Breadcrumb list={[
            {url:'/',name:'HOME'},
            {url:'/collections/all-apparel',name:'ALL-APPAREL'}
          ]}/>
        </div>
        <div className='flex flex-wrap  px-[360px]'>
        {
          isloading? <Loading /> : item.map((data) => (
     
            
            <div key={data.id}>
            <Product 
             id={data.id}
             image2={data.product.image2}
             name={data.product.name}
             price={data.product.price}
             image1={data.product.image1}
             ready={data.product.ready}
             description={data.product.description}
             ships={data.product.ships}
             />
             </div>
          ))   
        }
        </div>
  </div>
  )
}
