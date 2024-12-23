import Image from 'next/image'
import React from 'react'

export default function TrendingOffer() {
    return (
        <div className="flex justify-center items-center gap-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="max-w-[420px] h-[270px] p-4 bg-[#31208A0D]">
                    <p className="text-[26px] textColor">23% off in all products</p>
                    <p className="text-[#FB2E86] underline">Shop Now</p>
                    <Image
                        src={"/p-chair.png"}
                        height={180}
                        width={180}
                        alt="img"
                        className="ml-24"
                    ></Image>
                </div>
                <div className="max-w-[420px] h-[270px] p-4 bg-[#31208A0D]">
                    <p className="text-[26px] textColor">23% off in all products</p>
                    <p className="text-[#FB2E86] underline">View Collection</p>
                    <Image
                        src={"/p-chair.png"}
                        height={180}
                        width={180}
                        alt="img"
                        className="ml-24"
                    ></Image>
                </div>
                <div className="textColor  flex flex-col justify-center items-center">
                    <div className="w-[267px] h-[74px] flex items-center my-1">
                        <div>
                            <Image
                                src={"/p-chair.png"}
                                width={90}
                                height={90}
                                alt="img"
                                className="bg-[#F5F6F8]"
                            ></Image>
                        </div>
                        <div>
                            <div>Executive Seat chair</div>
                            <del className="text-xs">$32.00</del>
                        </div>
                    </div>
                    <div className="w-[267px] h-[74px] flex items-center my-1">
                        <div>
                            <Image
                                src={"/p-chair.png"}
                                width={90}
                                height={90}
                                alt="img"
                                className="bg-[#F5F6F8]"
                            ></Image>
                        </div>
                        <div>
                            <div>Executive Seat chair</div>
                            <del className="text-xs">$32.00</del>
                        </div>
                    </div>
                    <div className="w-[267px] h-[74px] flex items-center my-1">
                        <div>
                            <Image
                                src={"/p-chair.png"}
                                width={90}
                                height={90}
                                alt="img"
                                className="bg-[#F5F6F8]"
                            ></Image>
                        </div>
                        <div>
                            <div>Executive Seat chair</div>
                            <del className="text-xs">$32.00</del>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
