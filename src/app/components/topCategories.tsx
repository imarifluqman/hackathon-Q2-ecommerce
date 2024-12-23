import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { productsArray } from './productsArray'
import Heading from './heading'
function TopCategories() {
    return (
        <>
            <div>
                <Heading>Top Categories</Heading>
                <section className="flex justify-center">
                    <div className="grid max-w-[1000px] p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-6 gap-5">
                        {productsArray?.map((Product, idx) => (
                            <div key={idx} >
                                <div className="w-64 h-64 p-4  rounded-none group transition-all duration-300 ">
                                    {/* Image Container */}
                                    <div className="w-full h-full relative overflow-hidden  rounded-full group-hover:border-l-4 group-hover:border-b-4  group-hover:border-[var(--pink)] ">
                                        <Image
                                            src={Product.image}
                                            alt="image"
                                            width={400}
                                            height={400}
                                            className="w-full h-full rounded-full object-contain bg-[#31208A0D]"
                                        />
                                        {/* View Details Button */}
                                        <Link
                                            href={`components/dynamicpage/trendingproduct/${Product.id}`}
                                        >
                                            {" "}
                                            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-[10px] font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                                View Shop
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    {/* Product Title */}
                                    <h3 className="font-medium mt-2 text-center text-sm textColor  transition-colors duration-300">
                                        {Product.title}
                                    </h3>

                                    {/* Product Price */}
                                    <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-1 transition-colors duration-300">
                                        $ {Product.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default TopCategories