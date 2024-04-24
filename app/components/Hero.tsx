import React from 'react'


import hero from "../../public/assets/heroimg.svg"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex justify-between px-[144px] py-[96px] items-center'>
       {/* hero text */}
        <div className='flex flex-col '>
            <div className='font-semibold  text-[64px] gap-y-[16px]'>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span> </div>
            <p className='text-[16px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
            <div className='py-[32px]'>
            <button className='mr-[14px] bg-[#4CAF4F] rounded-md p-5 text-white'>Register</button>
               </div>

               
        </div>
        
        {/* HERO IMG */}
        <div>
            <Image src={hero} alt=''/>
          
        </div>
    

       
        
    </div>
  )
}

export default Hero