import React from 'react'
import Heading from './heading'
import Card from './card'

function Products() {
    return (
        <div className='lg:w-[80vw] mx-auto my-10'>
            <Heading>Featured  Products</Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                <Card />
                <Card />
                <Card />
                <Card />



            </div>

        </div>
    )
}

export default Products