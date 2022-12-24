import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function Navbar() {
    const [open, setOpen]=useState(false);
    const Links =[
      {name:"HOME", link:"/"},
      {name:"PROJECTS", link:"/"},
      {name:"ABOUT", link:"/"},
    ];
    const linkElements = Links.map((link)=>(
        <li key={link.name} className='md:ml-8 md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
        </li>
    ))
  
    return (
    <div className='drop-shadow-md w-full fixed top-0 left-0'>
      <div className='flex items-center justify-between bg-white py-6 md:px-10 px-8'>
        <h1 className='font-bold text-2xl cursor-pointer text-gray-800'>KN</h1>

        <button onClick={()=> setOpen(!open)} className='cursor-pointer md:hidden'>
            {open ? <XMarkIcon className='w-8'/> : <Bars3Icon className='w-8'/>}
        </button>

        <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-200px]'}`}>
            {linkElements}
        </ul>
      </div>
    </div>
  )
}

export default Navbar