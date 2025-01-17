import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { FiZoomIn } from "react-icons/fi";
interface ProductData {
    title: string;
    image: string;
    price: number;
}

interface LatestProductCardProps {
    data: ProductData;
}

function LatestProductCard(props: LatestProductCardProps) {
    const { title, image, price } = props.data
    return (
        <div className='lg:w-[310px] w-[90%] mx-auto group relative overflow-hidden'>
            <div className='w-full h-[200px] bg-slate-100'>
                <div className='absolute top-8 left-2  -rotate-45 bg-[var(--pink)] text-white text-[10px] font-semibold py-1 px-6'>Sale</div>
                <div className='w-full flex justify-center items-center'>
                    <Image className='lg:w-full lg:h-[200px] w-full h-[200px] border' src={image} alt="latest" width={100} height={100} />
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
                <p className='text-[12px] font-semibold text-[var(--heading)]'>{title}</p>
                <p className='text-[12px] font-semibold text-[var(--heading)]'>${price}<del className='ml-1 font-semibold text-[var(--pink)]'>$52</del></p>
            </div>

        </div>
    )
}

export default LatestProductCard