import React from 'react'
import Image from 'next/image';
import grid1 from "../../public/assets/grid1.svg"
import grid2 from "../../public/assets/grid2.svg"
import grid3 from "../../public/assets/grid3.svg"
import grid4 from "../../public/assets/grid4.svg"
import grid5 from "../../public/assets/grid5.svg"
import grid6 from "../../public/assets/grid6.svg"
import grid7 from "../../public/assets/grid7.svg"


const ClientsSection = () => {
  return (
    <div className='  px-[105px] py-[40px] '>

        <div className='flex justify-center items-center flex-col'>
            <p className='text-[#4D4D4D] text-[36px] font-semibold'>Our Clients</p>
            <p className='text-[#717171] text-[16px] font-normal mb-[40px]'>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className='grid grid-cols-7 '>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid1} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid2} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid3} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid4} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid5} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid6} alt=''/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={grid7} alt=''/>
            </div>
            


        </div>

    </div>
  )
}

export default ClientsSection