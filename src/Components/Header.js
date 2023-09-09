import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useEffect} from 'react';
import useSetHeader from '../Helpers/Hooks/useSetHeader';
import Itemcart from './Itemcart';
import { subTotal,itemCount } from '../Helpers/database/database';
import { Link } from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { icon } from '@fortawesome/fontawesome-svg-core';
export default function Header({itemcount,itemCart,subTotal}) {
  const [imageSize, setImageSize] = useState('h-20')
  const [headerSize, setHeaderSize] = useState('h-24')
  const [cartStatus, setCartStatus] = useState(false)
  const navigate = useNavigate()
  // useSetHeader(setImageSize)
  useEffect(() => {
    function scrollMouse() {
       if(window.scrollY>1)
        {
       setImageSize('h-16')
       } else {
          setImageSize('h-20')
       }
    }
       window.addEventListener('scroll',scrollMouse)
    return () => {
      window.removeEventListener('scroll',scrollMouse)
    }
  },[])
  useEffect(() => {
    function mouseScroll() {
       if(window.scrollY>1)
        {
       setHeaderSize('h-20')
       } else {
          setHeaderSize('h-24')
       }
    }
       window.addEventListener('scroll',mouseScroll)
    return () => {
      window.removeEventListener('scroll',mouseScroll)
    }
  },[])

  useEffect(() => {
  console.log(itemCart)
    return () => {
 
    }
  }, [])
  
  return (
 <div className={` bg-black w-full px-7 text-white fixed z-50 top-0`}>
    <div className={`${headerSize} flex justify-center items-center`}>
        <div>
        <img src="https://cdn.shopify.com/s/files/1/1461/5290/files/SLIP-white_logo_x300_1_861ae665-2fa3-475d-bdad-09da396bb234_x300.png?v=1658242698" 
        className={`${imageSize} transition-all ease-in duration-200`}/>
        </div>
        <div className='absolute right-7 hover:text-orange-500 cursor-pointer pt-10 ' onClick={()=>{itemcount === 0? navigate('/Cart') : setCartStatus(true)}}>
          CART[{itemcount}]  <ShoppingCartIcon/>
          </div>
          <div className={cartStatus?'fixed right-0 bottom-0 top-0  border-l-2  bg-black text-white transition-all ease-in translate-x-0':'fixed right-0 bottom-0 top-0  border-l-2  bg-red-600 text-white transition-all ease-in translate-x-full'}>
          <div className=' text-white  w-[300px] h-full pl-4 pr-4 pt-4 '>
            <div className='flex justify-between '>
                <p className='text-white font-medium'>SHOPPING CART</p>
                <div className='  flex  hover:cursor-pointer' onClick={()=>{setCartStatus(false)}}><CloseIcon /></div>
                </div>
            <ul className='w-full text-white p-2 max-h-96 overflow-y-scroll font-bold '>
               {itemCart.map ((item) =>(
                  <Itemcart id={item.id} name={item.cart.name} 
                    price={item.cart.price} 
                    size={item.cart.size} 
                    quantity={item.cart.quantity}
                    image1={item.cart.image1} 
                    image2={item.cart.image2} 
                    ready={item.cart.ready} 
                    description={item.cart.description}
                    id_product={item.cart.id_product}
                    ships={item.cart.ships}
               />
               ))}
            </ul>
            <div className='flex justify-between mt-4'>
               <p className='font-sans text-gray-300'>SUBTOTAL</p>
            <p className='font-bold'>{subTotal.toLocaleString('en-US', {style:'currency',currency:'USD'})}</p>
            </div> 
            <div className='mt-[50px] bg-white text-black flex justify-center items-center text-center py-1 text-[14px] text-bold h-[40px]'>
               <p className='font-bold text-[14px] hover:cursor-pointer'>CHECK OUT <TrendingFlatIcon /></p>
            </div>  
            </div>
         </div>      
    </div>  
    <div className='flex justify-center items-center w-full h-10'>
        <ul className='flex justify-center items-center w-full h-full'>
            <li className=' w-fit h-16  hover:text-orange-500 cursor-pointer inline-block group'> 
                <div className='px-[15px] mt-[23px] pb-2 flex justify-center items-center'>SHOP ALL<span className='-ml-1'><ExpandMoreIcon /></span></div>
                 <div className='w-36  absolute bg-gray-800 text-white hidden group-hover:block'>
                    <Link to='/collections/all-apparel' className='flex justify-center items-center  pt-[15px] hover:text-orange-500 cursor-pointer'>APPAREL</Link>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>WOMAN</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>YOUTH</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>ACCESORIES</a>
                    <a className='flex justify-center items-center pt-[38px] pb-[20px] hover:text-orange-500 cursor-pointer'>MUSIC</a>
                 </div>
            </li>
            <li className=' w-fit h-16  hover:text-orange-500 cursor-pointer inline-block group'> 
                <div className='px-[15px] mt-[23px] pb-2 flex justify-center items-center'>COLLECTIONS<span className='-ml-1'><ExpandMoreIcon /></span></div>
                 <div className='w-36 absolute bg-gray-800 text-white hidden group-hover:block'>
                    <a className='flex justify-center items-center  pt-[15px] hover:text-orange-500 cursor-pointer'>SPRING CAPSULE</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>NEW ARRIVALS</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>TOUR 2022</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>THE END,SO FAR</a>
                    <a className='flex justify-center items-center pt-[38px] pb-[20px] hover:text-orange-500 cursor-pointer'>BEST SELLERS</a>
                 </div>
            </li>
            <li className=' w-fit h-16 px-[15px] pt-[13px] pb-2 flex justify-center items-center hover:text-orange-500 cursor-pointer'>SIGN UP</li>
            <li className=' w-fit h-16  hover:text-orange-500 cursor-pointer inline-block group'> 
                <div className='px-[15px] mt-[23px] pb-2 flex justify-center items-center'>SHOP BY LOCATION<span className='-ml-1'><ExpandMoreIcon /></span></div>
                 <div className='w-36 absolute bg-gray-800 text-white hidden group-hover:block'>
                    <a className='flex justify-center items-center  pt-[15px] hover:text-orange-500 cursor-pointer'>DE STORE</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>UK STORE</a>
                    <a className='flex justify-center items-center pt-[38px] hover:text-orange-500 cursor-pointer'>AUS/NZ STORE</a>
                    <a className='flex justify-center items-center pt-[38px] pb-[20px] hover:text-orange-500 cursor-pointer'>JPN STORE</a>
                 </div>
            </li>
        </ul>
    </div>
 </div>
  )
}
