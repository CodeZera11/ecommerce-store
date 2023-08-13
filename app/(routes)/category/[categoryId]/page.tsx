import Billboard from '@/components/billboard';
import Filter from '@/components/filter';
import NoResults from '@/components/no-results';
import ProductCard from '@/components/product-card';
import Products from '@/components/products';
import getCategory from '@/fetchers/get-category';
import getColors from '@/fetchers/get-colors';
import getProducts from '@/fetchers/get-products';
import getSizes from '@/fetchers/get-sizes';
import React from 'react'

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        sizeId: string,
        colorId: string,
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId
    })

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                    <div className='hidden lg:block'>
                        <Filter
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                        <Filter
                            valueKey="colorId"
                            name="Color"
                            data={colors}
                        />
                    </div>
                    <div className='mt-6 lg:col-span-4 lg:mt-8'>
                        {products.length === 0 && <NoResults />}
                        <div className='grid colgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4-span-4'>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage