import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    sizeId?: string;
    colourId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            colourId: query.colourId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    });

    try {
        const res = await fetch(url); // Use the constructed URL with query parameters.
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`);
    }
}


export default getProducts;