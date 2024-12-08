import Link from 'next/link'
import React from 'react'
import { MdOutlineMailOutline, MdWifiCalling3 } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";


function TopNav() {
    return (
        <div className='w-full h-[50px] flex justify-center items-center  bg-[var(--top)] text-white'>

            <div className='lg:w-[80%] lg:flex lg:justify-between lg:items-center lg:mx-auto '>
                <div className='flex justify-center items-center gap-8'>
                    <Link className='flex justify-center items-center text-[16px] gap-2 hover:underline ' href='mailto: mhhasanul@gmail.com'><MdOutlineMailOutline /> mhhasanul@gmail.com</Link>
                    <Link className='flex justify-center items-center text-[16px] gap-2 hover:underline ' href='tel: +8801799-999999'><MdWifiCalling3 /> (12345)67890</Link>
                </div>
                <div className='flex justify-center items-center text-[16px]  gap-4'>
                    <select className='bg-transparent text-[16px] border-none outline-none ' name="" id="">
                        <option className='text-black' value="">English</option>
                        <option className='text-black' value="">Urdu</option>
                        <option className='text-black' value="">Hindi</option>
                    </select>
                    <select className='bg-transparent text-[16px] border-none outline-none ' name="" id="">
                        <option className='text-black' value="">USD</option>
                        <option className='text-black' value="">PKR</option>
                        <option className='text-black' value="">EUR</option>
                    </select>
                    <Link className='flex justify-center items-center text-[16px] gap-1 hover:underline ' href='/'>Login <FiUser /></Link>
                    <Link className='flex justify-center items-center text-[16px] gap-1 hover:underline ' href='/'>WishList <FaRegHeart /></Link>
                    <Link className='flex justify-center items-center text-[16px] gap-1 hover:underline ' href='/'><CgShoppingCart /></Link>
                </div>
            </div>
        </div>
    )
}

export default TopNav