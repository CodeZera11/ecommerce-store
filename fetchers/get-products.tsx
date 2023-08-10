import { Product } from "@/types";
import qs from "query-string"

interface QueryProps {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProducts = async (query: QueryProps): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        },
    })

    const response = await fetch(url);
    return response.json()
}