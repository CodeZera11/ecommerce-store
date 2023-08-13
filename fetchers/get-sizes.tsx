import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`);

    return response.json();
}

export default getSizes;