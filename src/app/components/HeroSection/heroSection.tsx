'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='lg:w-full lg:h-[500px] w-[100vw] h-[90vh] bg-[#F2F0FF] relative'>
                        <div className='w-[387px] absolute lg:left-10 lg:top-0 left-3 top-0'>
                            <Image src="/hero-lamp.png" alt="hero" width={300} height={300} />
                        </div>
                        <div className='lg:w-[500px] w-full ml-3 absolute lg:left-[375px] lg:top-1/2  lg:-translate-y-1/2  '>
                            <p className='text-[var(--pink)] text-[16px] mb-5'>Best Furniture For Your Castle....</p>
                            <h1 className='text-4xl font-bold'>New Furniture Collection Trends in 2020</h1>
                            <p className='text-[14px] my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</p>
                            <button className='bg-[var(--pink)] text-white py-2 px-4 hover:bg-fuchsia-700'>Shop Now</button>
                        </div>
                        <Image src="/hero-chair-bg.png" alt="hero" width={300} height={300}
                            className='lg:w-[350px] w-[250px] absolute lg:right-[250px] lg:top-1/2 lg:-translate-y-1/2 ' />

                        <Image src="/hero-chair.png" alt="hero" width={300} height={300}
                            className='lg:w-[306px] w-[250px] absolute lg:right-[250px] lg:top-1/2 lg:-translate-y-1/2 ' />

                        <Image src="/hero-dis.png" alt="hero" width={300} height={300}
                            className='w-[80px]  absolute lg:right-[200px] lg:top-[120px]   ' />
                        <p className='w-[80px] absolute lg:right-[180px] lg:top-[130px]  text-[20px] text-white '>50% <br /> OFF</p>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='lg:w-full lg:h-[500px]' src="/promotional.png" alt="hero" width={300} height={300} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
