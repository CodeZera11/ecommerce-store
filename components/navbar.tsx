import React from 'react'
import MainNav from './main-nav'
import Link from 'next/link'
import getCategories from '@/fetchers/get-categories'
import { Button } from './ui/button'
import { ShoppingBag } from '../node_modules/lucide-react'

const Navbar = async () => {

    const categories = await getCategories();

    return (
        <div className='px-4 py-4 md:px-6 lg:px-8 flex gap-10 items-center bg-[#1F1F20] text-white border-black border-b'>
            <div className='text-lg md:text-xl lg:text-2xl font-bold'>
                <Link href={"/"}>STORE</Link>
            </div>
            <div>
                <MainNav data={categories} />
            </div>
            <div className='ml-auto'>
                <Button className='gap-2'>
                    {<ShoppingBag size={20} />}
                    0
                </Button>
            </div>
        </div>
    )
}

export default Navbar