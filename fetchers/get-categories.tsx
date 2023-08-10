import { Category } from "@/types";

export const getCategories = async (): Promise<Category[]> => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

    return response.json();
}