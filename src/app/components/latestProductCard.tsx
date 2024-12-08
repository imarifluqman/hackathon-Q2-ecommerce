import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { FiZoomIn } from "react-icons/fi";
function LatestProductCard() {
    return (
        <div className='w-[310px] mx-auto group relative overflow-hidden'>
            <div className='w-full h-[200px] bg-slate-100'>
                <div className='absolute -top-10 -left-10 group-hover:top-8 group-hover:left-2 -rotate-45 bg-[var(--pink)] text-white text-[10px] font-semibold py-1 px-6'>Sale</div>
                <div className='w-full flex justify-center items-center'>
                    <Image className='w-auto h-auto' src="/p-chair.png" alt="latest" width={310} height={200} />
                </div>
                <div className=' flex flex-col justify-center items-start gap-1 absolute group-hover:left-4 bottom-10 -left-10'>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1 ' >
                        <CgShoppingCart />
                    </span>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1' >
                        <FaRegHeart />
                    </span>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1 ' >
                        <FiZoomIn />
                    </span>
                </div>
            </div>
            <div className='bg-white flex justify-between items-center p-2'>
                <p className='text-[12px] font-semibold text-[var(--heading)]'>Comfort Handy Craft</p>
                <p className='text-[12px] font-semibold text-[var(--heading)]'>$42 <del className='ml-1 font-semibold text-[var(--pink)]'>$52</del></p>
            </div>

        </div>
    )
}

export default LatestProductCard