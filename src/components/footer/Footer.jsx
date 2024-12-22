import Link from 'next/link'
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <div className=' w-full mt-10 mb-1 px-10 md:px-24 py-10 font-thin font-inter text-sm  flex flex-col-reverse gap-2 min-[768px]:flex-row min-[366px]:justify-between items-center'>
        <div className="left-one flex  gap-4">
            <Link href={'/'}>Instagram</Link>
            <Link href={'/'}>Youtube</Link>
            <Link href={'/'}>X</Link>
        </div>
        <div className="center-one">
             Sevenn &copy; 2024
        </div>
        <div className="go-up p-3 bg-white text-black hidden md:flex">
            <FaArrowUp/>
        </div>
    </div>
  )
}

export default Footer