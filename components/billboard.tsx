import { Billboard } from '@/types'
import React from 'react'

interface BillboardProps {
    data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                <div className="p-14 h-full w-full flex flex-col justify-center items-end text-center gap-y-8">
                    <div className="text-yellow-300 font-bold text-2xl sm:text-3xl lg:text-5xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard