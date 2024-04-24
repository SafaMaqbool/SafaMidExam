import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/logo.svg';

const NavLinks=[
    {
        no: 1,
        name: "Home"
    },
    {
        no: 2,
        name: "Service"
    },
    {
        no: 3,
        name: "Feature"
    },
    {
        no: 4,
        name: "Product"
    },
    {
        no: 5,
        name: "Testimonial"
    },
    {
        no: 6,
        name: "Faq"
    }
   

]
const Navbar = () => {
  return (
    <div className='flex justify-between px-[105px] py-[30px] items-center'>
        {/* logo and logo text */}
        <div className='flex gap-2'>
          <Image src={logo} alt=''/>
          <p className='text-[#263238] font-bold'>Nexcent</p>

        </div>

        {/* navlinks */}
        <div className='flex justify-center items-center gap-8'>
          <p>Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>Faq</p>

        </div>

        {/* login and sign up */}
        <div className='px-2'>
            <button className='font-normal text-[#4CAF4F] p-5 border-[#4caf4f]'>Log In</button>
            <button className='mr-[14px] bg-[#4CAF4F] p-5 rounded-md text-white'>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar