import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`);

    return response.json();
}

export default getColors;