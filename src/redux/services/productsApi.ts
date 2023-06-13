import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Product } from "../../utils/types"

export interface GetProductsResponse {
    products: Product[];
    success: boolean;
    length: number | null;
}
export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api",
        credentials: "same-origin",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getProducts: builder.query<GetProductsResponse, null>({
            query: () => "/products",
            transformResponse: (response: any) => {
                const {products, success} = response
                return {products, success} as GetProductsResponse
            }
        }),
        getSingleProduct: builder.query<Product, string>({
            query: (id)=> `/product/${id}`
        }),
        createProduct: builder.mutation({
            query: (payload) => ({
                url: "/product/create",
                body: payload,
                method: "POST",
                headers: {
                    'Content-Type': "application/json; charset=UTF-8"
                }
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {useGetProductsQuery, useGetSingleProductQuery, useCreateProductMutation} = productsApi