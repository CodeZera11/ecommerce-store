import Billboard from '@/components/billboard';
import Products from '@/components/products';
import getBillboard from '@/fetchers/get-billboard';
import getProducts from '@/fetchers/get-products';
import React from 'react'
import qs from "query-string"

// export const revalidate = 0;

const HomePage = async () => {

    const billboard = await getBillboard("64d1ed58161e9618c9b3f2da")


    const products = await getProducts({ isFeatured: true });

    return (
        <div className='space-y-10 pb-10'>
            <Billboard data={billboard} />
            <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                <Products title="Featured Products" products={products} />
            </div>
        </div>
    )
}

export default HomePage