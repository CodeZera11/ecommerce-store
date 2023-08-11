"use client"

import { formatter } from '@/lib/utils';
import { Product } from '@/types'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingCart } from '../node_modules/lucide-react';

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {

    const onAddToCart = () => { }

    return (
        <div>
            <h1 className='text-3xl font-bold text-yellow-200'>{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-white">
                    {formatter.format(Number(data.price))}
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6 text-white">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-white">Size:</h3>
                    <div>
                        {data?.size?.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-white">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2 text-white bg-black rounded-full hover:text-yellow-200 hover:bg-black">
                    Add To Cart
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    )
}

export default Info