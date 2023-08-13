import { Category } from "@/types";

const getCategory = async (url: string): Promise<Category> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${url}`)

    return response.json();
}

export default getCategory;