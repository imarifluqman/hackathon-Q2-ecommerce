'use client'
import React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,


} from "@/components/ui/carousel"
export default function HeroSection() {
    return (
        <>

            <Carousel>
                <CarouselContent>
                    <CarouselItem >
                        <div className='lg:w-full lg:h-[500px] md:w-full md:h-[400px] sm:w-full sm:h-[400px] w-[100vw] h-[90vh] bg-[#F2F0FF] lg:flex lg:flex-row lg:justify-center lg:items-start md:flex md:flex-row md:justify-center md:items-start sm:flex sm:flex-row sm:justify-center sm:items-start sm:gap-y-4 flex flex-col gap-y-5 items-center'>
                            <div>
                                <Image className='lg:w-[150px]' src="/hero-lamp.png" alt="hero" width={100} height={100} />
                            </div>
                            <div className='lg:w-[460px] md:w-[400px] sm:w-[300px] md:my-auto md:mx-0  sm:my-auto sm:mx-0 w-[90%]   lg:my-auto  lg:mx-0  mx-auto'>
                                <p className='text-[var(--pink)] text-[16px] mb-5'>Best Furniture For Your Castle....</p>
                                <h1 className='lg:text-4xl text-2xl font-bold'>New Furniture Collection Trends in 2020</h1>
                                <p className='lg:text-[13px] text-[14px] lg:my-5 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-[var(--pink)] text-white py-2 px-4 hover:bg-fuchsia-700'>Shop Now</button>
                            </div>
                            <div className='lg:w-[400px] sm:w-[300px] w-[250px] relative top-0 lg:relative lg:top-[80px] md:relative md:top-[80px] sm:relative sm:top-[60px]  '>
                                <div className='w-[80px] lg:absolute lg:-top-[-10px] lg:-right-6 absolute top-0 right-0 z-10 '>
                                    <Image src="/hero-dis.png" alt="hero" width={300} height={300}
                                        className='w-[80px] ' />
                                    <p className='w-[80px] lg:absolute lg:-top-[-10px] lg:left-4 absolute -top-[-10px] left-4  text-[20px] text-white '>50% <br /> OFF</p>
                                </div>
                                <Image src="/hero-chair-bg.png" alt="hero" width={300} height={300}
                                    className='w-full lg:absolute absolute ' />

                                <Image src="/hero-chair.png" alt="hero" width={300} height={300}
                                    className='w-full lg:absolute absolute ' />


                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem >
                        <div className='lg:w-full lg:h-[500px] md:w-full md:h-[400px] sm:w-full sm:h-[400px] w-[100vw] h-[90vh] bg-[#F2F0FF] lg:flex lg:flex-row lg:justify-center lg:items-start md:flex md:flex-row md:justify-center md:items-start sm:flex sm:flex-row sm:justify-center sm:items-start sm:gap-y-4 flex flex-col gap-y-5 items-center'>
                            <div>
                                <Image className='lg:w-[150px]' src="/hero-lamp.png" alt="hero" width={100} height={100} />
                            </div>
                            <div className='lg:w-[460px] md:w-[400px] sm:w-[300px] md:my-auto md:mx-0  sm:my-auto sm:mx-0 w-[90%]   lg:my-auto  lg:mx-0  mx-auto'>
                                <p className='text-[var(--pink)] text-[16px] mb-5'>Best Furniture For Your Castle....</p>
                                <h1 className='lg:text-4xl text-2xl font-bold'>New Furniture Collection Trends in 2020</h1>
                                <p className='lg:text-[13px] text-[14px] lg:my-5 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.</p>
                                <button className='bg-[var(--pink)] text-white py-2 px-4 hover:bg-fuchsia-700'>Shop Now</button>
                            </div>
                            <div className='lg:w-[400px] sm:w-[300px] w-[250px] relative top-0 lg:relative lg:top-[80px] md:relative md:top-[80px] sm:relative sm:top-[60px]  '>
                                <div className='w-[80px] lg:absolute lg:-top-[-10px] lg:-right-6 absolute top-0 right-0 z-10 '>
                                    <Image src="/hero-dis.png" alt="hero" width={300} height={300}
                                        className='w-[80px] ' />
                                    <p className='w-[80px] lg:absolute lg:-top-[-10px] lg:left-4 absolute -top-[-10px] left-4  text-[20px] text-white '>50% <br /> OFF</p>
                                </div>
                                <Image src="/hero-chair-bg.png" alt="hero" width={300} height={300}
                                    className='w-full lg:absolute absolute ' />

                                <Image src="/p-chair.png" alt="hero" width={300} height={300}
                                    className='w-full lg:absolute absolute ' />


                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div className='flex justify-center items-center gap-3 mt-5 '>
                    <div className='w-5 h-1 rounded bg-[var(--pink)]'></div>
                    <div className='w-5 h-1 rounded bg-[var(--pink)]'></div>
                    <div className='w-5 h-1 rounded bg-[var(--pink)] '></div>
                </div>
            </Carousel>


        </>
    );
}
