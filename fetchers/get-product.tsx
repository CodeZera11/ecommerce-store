import { Product } from "@/types"


const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

    return response.json();
}

export default getProduct;