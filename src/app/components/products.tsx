import React from 'react'
import Heading from './heading'
import Card from './card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

function Products() {
    return (
        <div className='lg:w-[80vw] mx-auto my-10'>
            <Heading>Featured  Products</Heading>

            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                        <Card />
                    </CarouselItem>

                </CarouselContent>

            </Carousel>

        </div>
    )
}

export default Products