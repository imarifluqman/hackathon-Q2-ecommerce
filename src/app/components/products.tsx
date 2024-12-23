import React from 'react'
import Heading from './heading'
import { productsArray } from './productsArray'
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

                    {productsArray.map((item, i) => {
                        return (
                            <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4 my-2">
                                <Card data={item} />
                            </CarouselItem>
                        )
                    })}

                </CarouselContent>

            </Carousel>

        </div>
    )
}

export default Products