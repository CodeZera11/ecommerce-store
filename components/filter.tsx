"use client";

import { Color, Size } from '@/types'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from "query-string"

interface FilterProps {
    valueKey: string,
    name: string,
    data: (Color | Size)[]
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedFilter = searchParams.get(valueKey)

    const handleClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        }

        if (current.valueKey === id) {
            query.valueKey = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold text-yellow-300'>
                {name}
            </h3>
            <hr className='my-4 text-yellow-200' />
            <div className='flex flex-wrap gap-2'>
                {data.map((filter) => (
                    <div key={filter.id}>
                        <Button
                            className={cn('bg-black text-white rounded-xl hover:text-black hover:bg-white transition-colors', selectedFilter === filter.id ? "text-black bg-white " : "")}
                            onClick={() => handleClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter