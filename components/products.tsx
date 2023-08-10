import { Product } from '@/types'
import React from 'react'
import ProductCard from './product-card';
import NoResults from './no-results';

interface ProductsProps {
    title: string;
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ title, products }) => {
    return (
        <div className='space-y-10 p-4'>
            <div className='font-bold text-4xl'>
                {title}
            </div>
            {products.length === 0 && <NoResults />}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products