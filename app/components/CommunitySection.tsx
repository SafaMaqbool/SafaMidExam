import React from 'react'
import Image from 'next/image'
import community1 from '../../public/assets/community1.svg'
import community2 from '../../public/assets/community2.svg'
import community3 from '../../public/assets/community3.svg'

const CommunitySection = () => {
    return (
        <div className='  px-[105px] py-[30px] '>

            <div className='flex justify-center items-center flex-col'>
                <p className='text-[#4D4D4D] text-[36px] font-semibold'>Manage your entire community in a single system</p>
                <p className='text-[#717171] text-[16px] font-normal mb-[40px]'>Who is Nextcent suitable for?
                </p>
            </div>

            <div className='grid grid-cols-3 '>

                <div className='flex flex-col justify-center items-center'>
                    <Image src={community1} alt='' />
                    <p className='text-[#4D4D4D] text-[28px] font-bold text-center'>Membership Organisations</p>
                    <p className='text-[#4D4D4D] text-[14px] font-medium text-center'>Our membership management  <br />software provides full automation of <br /> membership renewals and payments</p>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src={community2} alt='' />
                    <p className='text-[#4D4D4D] text-[28px] font-bold' >National Associations</p>
                    <p className='text-[#4D4D4D] text-[14px] font-medium text-center'>Our membership management  <br />software provides full automation of <br /> membership renewals and payments</p>

                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src={community3} alt='' />
                    <p className='text-[#4D4D4D] text-[28px] font-bold'>Clubs And Groups</p>
                    <p className='text-[#4D4D4D] text-[14px] font-medium text-center'>Our membership management  <br />software provides full automation of <br /> membership renewals and payments</p>

                </div>




            </div>

        </div>
    )
}

export default CommunitySection