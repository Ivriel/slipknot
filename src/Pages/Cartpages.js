import React from 'react'
import { subTotal,itemCount } from '../Helpers/database/database';
function Cartpages() {
  return (
    <div className='text-white '>
        <div className='text-white'>
          [{itemCount}]
        </div>
      <div className='text-white'>
        [{subTotal}]
      </div>

      </div>
  )
}

export default Cartpages