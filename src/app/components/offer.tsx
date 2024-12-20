import React from 'react'
import Heading from './heading'
import Image from 'next/image'

function Offer() {
    return (
        <div className='w-[80%] mx-auto'>
            <Heading>What Shopex Offer!</Heading>
            <div className='w-full mx-auto grid lg:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-4 gap-2'>
                <div className='lg:w-[200px] w-[160] h-[220px]  mx-auto bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/free-delivery.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 lg:w-[170px] w-[140px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='lg:w-[200px] w-[160] h-[220px]  mx-auto bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/cashback.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 lg:w-[170px] w-[140px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='lg:w-[200px] w-[160] h-[220px]  mx-auto bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/premium-quality.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 lg:w-[170px] w-[140px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='lg:w-[200px] w-[160] h-[220px]  mx-auto bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/24-hours-support.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 lg:w-[170px] w-[140px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer