import { Product } from '@/types'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Expand, ShoppingCart, Store } from '../node_modules/lucide-react';
import { formatter } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <Card className='rounded-xl bg-white/40 cursor-pointer overflow-hidden'>
                <div className='group relative w-full overflow-hidden'>
                    <Image
                        className='rounded-xl aspect-square object-cover group-hover:scale-110 transition duration-500 hover:opacity-40'
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
                <div className='p-2'>
                    <div className='mt-2 w-full text-start capitalize text-lg'>
                        <p className="font-semibold text-lg">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category?.name}</p>
                    </div>
                    {/* Price & Reiew */}
                    <div className="w-full text-start">
                        <div>{formatter.format(Number(product.price))}</div>
                    </div>
                </div>
            </Card >
        </>
    )
}

export default ProductCard