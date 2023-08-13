"use client"

import { Billboard } from '@/types'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TypewriterComponent from "typewriter-effect"

interface BillboardProps {
    data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {

    return (
        <>
            <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">

                <AspectRatio ratio={16 / 9}>
                    <div className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl sm:max-w-xl mx-auto h-full flex items-center justify-center w-full">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#b2ff23] via-[#497BF8] to-[#CE14FF] mt-9 ">
                            {data.label}
                        </div>

                    </div>

                    <div className='w-full h-full'>
                        <Image
                            src={data?.images[0].url}
                            alt='image'
                            fill
                            className='border rounded-2xl opacity-10'
                        />
                    </div>

                    {/* <div style={{ backgroundImage: `url(${data?.images[0].url})` }} className="border rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                    <div className="p-14 h-full w-full flex flex-col justify-center items-end text-center gap-y-8">
                        <div className="text-yellow-300 font-bold text-2xl sm:text-3xl lg:text-5xl sm:max-w-xl max-w-xs">
                            {data.label}
                        </div>
                    </div>
                </div> */}

                </AspectRatio >
            </div >
        </>
    )
}

export default Billboard