import React from 'react'
import Heading from './heading'
import Image from 'next/image'

function Offer() {
    return (
        <div className='w-[80%] mx-auto border'>
            <Heading>What Shopex Offer!</Heading>
            <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5  '>
                <div className='w-[200px] h-[220px] bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/free-delivery.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 w-[170px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='w-[200px] h-[220px] bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/cashback.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 w-[170px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='w-[200px] h-[220px] bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/premium-quality.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 w-[170px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div className='w-[200px] h-[220px] bg-white shadow-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src="/24-hours-support.png" alt="chair" width={50} height={50} />
                    <p>24/7 Support</p>
                    <p className='text-[12px] text-slate-300 w-[170px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer