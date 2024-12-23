import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from './heading'
import { productsArray } from './productsArray'
import TrendingOffer from './trendingoffer'

export default function TrendingProducts() {

    return (
        <>


            <Heading> Trending Products</Heading>
            <section className="flex items-center justify-center">
                <div className="grid max-w-[1000px] p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-6 gap-5">
                    {productsArray.slice(0,4).map((Product, idx) => (
                        <div key={idx}>
                            <div className="min-h-64 border-none rounded-none group transition-all duration-300 hover:bg-[#F7F7F7]">
                                {/* Image Container */}
                                <div className="w-full h-64 relative overflow-hidden p-3">
                                    <Image
                                        src={Product.image}
                                        alt="image"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-contain bg-[#F7F7F7]"
                                    />
                                    {/* View Details Button */}
                                    <Link
                                        href={`components/dynamicpage/trendingproduct/${Product.id}`}
                                    >
                                        {" "}
                                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-xs font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    {/* Product Title */}
                                    <h3 className="font-bold mt-2 text-center text-sm textColor my-2 transition-colors duration-300">
                                        {Product.title}
                                    </h3>

                                    {/* Product Price */}
                                    <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-2 transition-colors duration-300">
                                        $ {Product.price.toFixed(2)}{" "}
                                        <del className="ml-3 px-2 text-[#1518754D]">$65</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <TrendingOffer />
        </>
    )
}
