import { blogsArray } from './blogsArray'
import Image from 'next/image'
import Heading from './heading'
import Link from 'next/link'

export default function Blogs() {
    return (
        <section className="flex justify-center font-bold my-5">

            <div>
                <Heading>Latest Blog</Heading>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    {blogsArray.map((blog, index) => (
                        <div key={index} className='w-[300px] hover:bg-slate-100 hover:shadow-lg overflow-hidden'>
                            <Image className='rounded-lg' src={blog.image} height={300} width={300} alt='img'></Image>
                            <Image
                                src={'/Vector-pen.png'}
                                height={10}
                                width={10}
                                alt='write'
                                className='inline-block mx-2 my-3'></Image>
                            <span className='textColor text-xs font-thin mr-5'>{blog.writerName}</span>
                            <Image
                                src={'/Vector-calender.png'}
                                height={10}
                                width={10}
                                alt='write'
                                className='inline-block  mx-2 my-3'></Image>
                            <span className='textColor text-xs font-thin'>{blog.date}</span>

                            <h2 className='textColor my-4  ml-4'>{blog.title}</h2>

                            <p className='text-sm font-thin max-w-72 text-[#72718F] ml-4'>{blog.description}</p>

                            <Link href={"/"} className='underline my-4 text-sm font-thin textColor ml-4 cursor-pointer'>Read more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}