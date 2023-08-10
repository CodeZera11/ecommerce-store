import { Billboard } from "@/types";

export const getBillboard = async (url: string): Promise<Billboard> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billboards/${url}`)

    return res.json();
}