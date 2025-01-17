import React from 'react'
import Image from 'next/image'
import { lato } from './fonts'
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { FiZoomIn } from "react-icons/fi";

interface CardProps {
    title?: string;
    id: string,
    image: string,
    code: string,
    description: string,
    price: number,
}

interface CardComponentProps {
    data: CardProps;
}

const Card: React.FC<CardComponentProps> = (props) => {
    const { title, image, code, price } = props.data;

    return (
        <div className=' lg:w-[260px] md:w-[220px] w-[180px] mx-auto group relative overflow-hidden '
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.04) 0px 2px 4px" }}>
            <div className='w-full relative p-6 bg-[#F6F7FB] flex justify-center items-center'>
                <div className='absolute -top-6 left-5 flex justify-center items-center gap-2 group-hover:top-3'>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1' >
                        <CgShoppingCart />
                    </span>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1' >
                        <FaRegHeart />
                    </span>
                    <span className='text-blue-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-slate-200 hover:text-[var(--pink)] hover:w-8 hover:h-8 hover:rounded-full hover:p-1' >
                        <FiZoomIn />
                    </span>
                </div>
                <Image src={image} alt="chair" width={300} height={200} className='w-[300px] h-[200px]' />
                <button className='absolute hidden group-hover:block bottom-1 right-1/2 translate-x-1/2 bg-[var(--green)] text-[14px] text-white py-2 px-4'>View Details</button>
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-center gap-4 bg-white '>
                <p className={` text-[var(--pink)] text-[18px] font-bold ${lato.className}`}>{title}</p>
                <div className='flex justify-center items-center'>
                    <span className='w-4 h-1 mx-1 bg-[#05E6B7] rounded'></span>
                    <span className='w-4 h-1 mx-1 bg-[var(--pink)] rounded'></span>
                    <span className='w-4 h-1 mx-1 bg-[var(--heading)] rounded'></span>
                </div>
                <p className=' text-[var(--heading)]'>{code}</p>
                <p className=' text-[var(--heading)]'>${price}</p>
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-center gap-4 bg-[#2F1AC4] group-hover:bottom-0 absolute  '>
                <p className={` text-white text-[18px] font-bold ${lato.className}`}>{title}</p>
                <div className='flex justify-center items-center'>
                    <span className='w-4 h-1 mx-1 bg-[#05E6B7] rounded'></span>
                    <span className='w-4 h-1 mx-1 bg-[var(--pink)] rounded'></span>
                    <span className='w-4 h-1 mx-1 bg-[var(--heading)] rounded'></span>
                </div>
                <p className=' text-white'>{code}</p>
                <p className=' text-white'>${price}</p>
            </div>
        </div>
    );
}

export default Card