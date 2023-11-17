import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSwatchbook } from "react-icons/fa6";



const Navbar = () => {
  const location = useLocation();

  return (
    <h1 className='flex items-center mt-3 gap-5 text-blue-500'>
      <FaSwatchbook className='text-3xl ml-5' />
      {
        !(location.pathname==="/") && 
        (
            <span className='text-2xl gap-2 text-blue-500 font-logo w-fit'>
              user management dashboard
            </span>

        )
      }
      </h1>

  )
}

export default Navbar