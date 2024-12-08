import Link from 'next/link'
import React from 'react'
import { lato } from './fonts'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
function Navbar() {
    return (
        <>


            < nav className='lg:w-[80%] h-[50px] flex justify-between items-center lg:mx-auto lg:px-0 px-2'>
                <Link href="/" className='text-3xl font-bold text-[var(--heading)]'>Hekto</Link>
                <ul className='lg:flex lg:justify-center lg:items-center lg:gap-4 hidden '>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Home</Link></li>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Pages</Link></li>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Products</Link></li>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Blog</Link></li>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Shop</Link></li>
                    <li className='hover:text-[var(--pink)]'><Link className={`text-[16px] font-semibold ${lato.className}`} href="/">Contact</Link></li>
                </ul>
                <div className=' flex justify-center items-center '>
                    <input className='h-[30px] border-2 outline-none px-2' type="search" />
                    <button className='bg-[var(--pink)] w-[40px] h-[30px] flex justify-center items-center  '>
                        <CiSearch className='text-[20px] font-bold text-white ' />
                    </button>
                </div>
                <div className='lg:hidden'>
                    <Sheet >
                        <SheetTrigger>
                            <IoMenu className='text-3xl font-bold text-[var(--heading)] lg:hidden' />
                        </SheetTrigger>
                        <SheetContent>
                            <ul className='mt-6  '>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Home</Link></li>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Pages</Link></li>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Products</Link></li>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Blog</Link></li>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Shop</Link></li>
                                <li className='py-2 border-b'><Link className={`${lato.className} text-[16px] font-normal `} href="/">Contact</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav >


        </>
    )
}

export default Navbar