import React from 'react'
import Image from 'next/image';
const Header = () => {
  return (
    <div className='flex item-center justify-center mt-3'>
        <Image
        src="/processor.png"
        height={50}
        width={50}
        className='mt-2 mr-4 mb-5'
        
        />

        
         <div className='text-3xl'>
        <p className='font-bold mt-4'style={{color: 'rgb(32,107,81)'}}>eSIM Manager</p>  
        </div>  
    </div>
  )
}

export default Header;

