import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({list}) {
  return (
    <nav className='w-full h-fit mx-auto p-8'>
       <ul className='flex justify-start items-center'>
        {
          list.map((item,index)=>{
            let lastchild = index+1 === list.length
            const arias = lastchild? {'aria-label':'current-page'} : {}
            return (
              <span className='flex items-center'>
                <li key={item.url} className='w-fit h-4 pr-2 mr-2 flex items-center'>
                  {
                    lastchild? <p {...arias}>{item.name}</p> : <Link to={item.url} className='text-[#8b8989]'>{item.name}</Link>
                  }
                </li>
                {
                  lastchild? <p></p> : <p className='w-fit h-4 pr-2 mr-2 flex items-center'>/</p>
                }
              </span>
            )
          })
       }
            {
            /* <Link to={'/'} className='text-[#8b8989] text-[12.6px] '>HOME</Link>
            <span className='flex text-[12.6px] text-white ml-[30px]'>/</span>
            <Link to={'/collections/all-apparel'} className='text-white text-[12.6px] ml-[30px]'>ALL APPAREL</Link> */}
        </ul>
    </nav>
  )
}

export default Breadcrumb