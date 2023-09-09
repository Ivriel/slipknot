import React from 'react'
import { Link,useLocation,useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import useScrolltoTop from '../Helpers/Hooks/useScrolltoTop'
import { addCart } from '../Helpers/database/database'
export default function Productdetailpage() {
  useScrolltoTop()
    const location = useLocation()

  let price = location.state.price
  let image1 = location.state.image1
  let image2 = location.state.image2
  let name =location.state.name
  let ready = location.state.ready
  let description = location.state.description
  let ships = location.state.ships
  const [image, setImage] = useState(image1)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('S')
  const {id} = useParams()  
  function fnsubmit(event) {
        event.preventDefault()
        addCart(id,name,price,image1,image2,quantity,size,ready,description,ships)
        console.log('terkirim')
  }
  return (
    <div className=' pt-40 bg-black text-white '>
      <div className=' flex ml-[410px] mt-[50px]'>
            <Breadcrumb list={[
               {url:'/',name:'HOME'},
               {url:'/collections/all-apparel',name:'ALL-APPAREL'},
               {url:`/collections/all-apparel/products/${id}`,name:name}
            ]}/>
        </div>
    <div className=' flex text-white  bg-black '>
      <div className='pl-96 '>
      <img src={image1} onClick={()=>{setImage(image1)}} className=' mt-[150px] h-24 w-22  cursor-pointer  '/>
      <img src={image2} onClick={()=>{setImage(image2)}}className='h-24 w-24 mt-[50px]  cursor-pointer'/>
      </div>
      <div>
      <img src={image} className='w-[661px] h-[661px]'/>
      </div>
      <div className='pl-14 w-[600px]'>
      <p className=' mt-[100px] text-[30px] font-bold'>{name}</p>
      <p className=' mt-[30px]  text-[20px] font-bold'>{price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</p>
      <p className=' mt-[40px] text'>OR 4 INTEREST-FREE PAYMENTS OF 15$ WITH @</p>
      <p className=' mt-[9px] text-slate-600 hover:text-orange-500 cursor-pointer'>LEARN MORE</p>
      <p className=' mt-[25px] text-[12px]'>SIZE</p>
      <form onSubmit={fnsubmit}>
      <ul className='flex mt-[5px]'>
      <li>
      <input type='radio' name='size' id='s' className=' hidden peer' onChange={()=> {setSize('S')}}/>
      <label className=' border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] font-bold hover:bg-white hover:text-black hover:cursor-pointer peer-checked:bg-white peer-checked:text-black'  htmlFor='s'>S</label>
      </li>
      <li>
      <input type='radio' name='size' id='m' className=' hidden peer'  onChange={()=> {setSize('M')}}/>
      <label className=' border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] font-bold ml-1 hover:bg-white hover:text-black hover:cursor-pointer peer-checked:bg-white peer-checked:text-black'  htmlFor='m'>M</label>
      </li>
      <li>
      <input type='radio' name='size' id='l' className=' hidden peer'  onChange={()=> {setSize('L')}}/>
      <label className=' border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] font-bold ml-1 hover:bg-white hover:text-black hover:cursor-pointer peer-checked:bg-white peer-checked:text-black' htmlFor='l'>L</label>   
      </li>  
      <li>
      <input type='radio' name='size' id='xl' className=' hidden peer'  onChange={()=> {setSize('XL')}}/>
      <label className=' border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] font-bold ml-1 hover:bg-white hover:text-black hover:cursor-pointer peer-checked:bg-white peer-checked:text-black'  htmlFor='xl'>XL</label>
      </li>
      <li>
      <input type='radio' name='size' id='2x' className=' hidden peer'  onChange={()=> {setSize('2X')}}/>
      <label className=' border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] font-bold ml-1 hover:bg-white hover:text-black hover:cursor-pointer peer-checked:bg-white peer-checked:text-black' htmlFor='2x'>2X</label>
      </li>
      </ul>
      <p className=' mt-[30px] text-[12px]'>QUANTITY</p>
      <ul className='flex  mt-[5px]'>
        <li className=' flex justify-center text-black'><input type='text' disabled value={quantity} className='text-center h-[47px] w-[47px] px-[12px] py-[10px] bg-black text-white'/></li>
        <li className='border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] ml-1 font-bold text-[15px] hover:bg-white hover:text-black cursor-pointer' onClick={()=>{quantity<= 1? setQuantity(1) :  setQuantity(quantity-1)}}>-</li>
        <li className='border-2 border-white px-[10px] py-[10px] flex justify-center w-[47px] h-[47px] ml-1 font-bold text-[15px] hover:bg-white hover:text-black cursor-pointer' onClick={()=>{setQuantity(quantity+1)}}>+</li>
      </ul>
      <button type='submit' className='  mt-[25px] border-2 text-white border-white px-[10px] py-[10px] flex justify-center w-[140px] font-bold text-[15px] hover:bg-white hover:text-black cursor-pointer'>{ready}</button>
      </form>
      <p className='  mt-[15px]  flex justify-left text-white font-bold text-[15px] '>{ships}</p>
      <p className='  mt-[35px]  flex justify-left text-white font-bold text-[15px] '>{description}</p>
      </div>
      </div>
</div>
  )
}
