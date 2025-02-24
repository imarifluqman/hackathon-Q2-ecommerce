import Image from 'next/image'
import React from 'react'

function UniqueFeature() {
    return (
        <div className='w-full bg-[#F1F0FF] lg:grid lg:grid-cols-2 lg:justify-items-center  grid grid-cols-1 justify-items-center my-5 py-5 px-2'>
            <div className='w-full place-self-end'>
                <Image className='w-full h-full text-end' src="/unique-sofa.png" alt="unique" width={100} height={100} />
            </div>
            <div className='w-full my-auto place-self-start'>
                <p className='text-2xl font-semibold text-[var(--heading)]'>Unique Features Of leatest &
                    Trending Poducts</p>
                <ul className='w-[95%] my-5 flex flex-col gap-2 '>
                    <li className='text-[12px] '><span className='w-2 h-2 inline-block rounded-full bg-[var(--pink)]'></span> All frames constructed with hardwood solids and laminates</li>
                    <li className='text-[12px] '><span className='w-2 h-2 inline-block rounded-full bg-[var(--heading)]'></span> Reinforced with double wood dowels, glue, screw - nails corner
                        blocks and machine nails</li>
                    <li className='text-[12px] '><span className='w-2 h-2 inline-block rounded-full bg-black'></span> Arms, backs and seats are structurally reinforced</li>
                </ul>
                <div className='flex gap-4 '>
                    <button className='bg-[var(--pink)] hover:bg-[var(--heading)] text-white py-1 px-4 text-[14px]'>Add to Cart</button>
                    <div>
                        <p className='text-[14px]'>B&B Italian Sofa </p>
                        <p className='text-[14px]'>$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueFeature