"use client"

import { Product } from '@/types'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Expand, ShoppingCart, Store } from '../node_modules/lucide-react';
import { formatter } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${product?.id}`)
    }

    return (
        <div className=' border border-gray-400 rounded-xl'>
            <Card className='rounded-xl border-none bg-black cursor-pointer overflow-hidden group' onClick={handleClick}>
                <div className='relative w-full overflow-hidden'>
                    <Image
                        className='aspect-square object-cover group-hover:scale-110 transition duration-500'
                        src={product.images[0].url}
                        alt='image'
                        objectFit='objectFit'
                        width={400}
                        height={400}
                    />
                    <div className='opacity-0 group-hover:opacity-100 transition absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10'>
                        <div className=" p-3 bg-gray-900 rounded-full flex justify-center items-center hover:scale-110 transition duration-500">
                            <Expand size={25} className='text-white' />
                        </div>
                        <div className=" p-3 bg-gray-900 rounded-full flex justify-center items-center hover:scale-110 transition duration-500">
                            <ShoppingCart size={30} className='text-white' />
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className='p-2 text-white'>
                    <div className='mt-2 w-full text-start capitalize text-lg space-y-0'>
                        <p className="font-bold text-lg">{product.name}</p>
                        <p className="text-sm text-yellow-100 ">{product.category?.name}</p>
                    </div>
                    {/* Price & Reiew */}
                    <div className="w-full text-start mt-4">
                        <div className='text-muted-foreground'>{formatter.format(Number(product.price))}</div>
                    </div>
                </div>
            </Card >
        </div>
    )
}

export default ProductCard