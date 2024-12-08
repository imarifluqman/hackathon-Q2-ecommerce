import React from 'react'
import Heading from './heading'
import Link from 'next/link'
import { lato } from './fonts'
import LatestProductCard from './latestProductCard'

function LatestProducts() {
    return (
        <div className='w-[80%] mx-auto py-6'>
            <Heading>Latest Products</Heading>
            <ul className={`flex justify-center items-center gap-6 ${lato.className}`}>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold'><Link className={lato.className} href='/'>New Arrival</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold'><Link className={lato.className} href='/'>Best Saller</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold'><Link className={lato.className} href='/'>Featured</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold'><Link className={lato.className} href='/'>Special Offer</Link></li>

            </ul>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 my-5'>
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
            </div>
        </div>
    )
}

export default LatestProducts