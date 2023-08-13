import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

    const data = await response.json();

    // console.log(data)

    return data;
}

export default getCategories;

