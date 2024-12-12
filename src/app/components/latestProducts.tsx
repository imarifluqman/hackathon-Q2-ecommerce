import React from 'react'
import Heading from './heading'
import Link from 'next/link'
import { lato } from './fonts'
import LatestProductCard from './latestProductCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
function LatestProducts() {
    return (
        <div className='w-[80%] mx-auto py-6'>
            <Heading>Latest Products</Heading>
            <ul className={`flex justify-center items-center lg:gap-6 gap-2 ${lato.className}`}>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold text-[12px] lg:text-[16px]'><Link className={lato.className} href='/'>New Arrival</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold text-[12px] lg:text-[16px]'><Link className={lato.className} href='/'>Best Saller</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold text-[12px] lg:text-[16px]'><Link className={lato.className} href='/'>Featured</Link></li>
                <li className='text-[var(--heading)] hover:text-[var(--pink)] font-bold text-[12px] lg:text-[16px]'><Link className={lato.className} href='/'>Special Offer</Link></li>

            </ul>
      

            <Carousel>
                <CarouselContent className='my-10'>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <LatestProductCard />
                        <LatestProductCard />
                    </CarouselItem>

                </CarouselContent>
     
            </Carousel>


        </div>
    )
}

export default LatestProducts