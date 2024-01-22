import { createApi, fetchBaseQuery, SerializeQueryArgs } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/constants/config.constant";
import { PaginatedHttpResponse } from "@/types/http.type";
import { IProduct, ProductQueryParams } from "@/types/product.type";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<PaginatedHttpResponse<IProduct[]>, {skip:number, limit:number}>({
      query: (queryParams) => {
        return `/products?skip=${queryParams.skip}&limit=${queryParams.limit}`
      } ,
      providesTags: ["products"],
      serializeQueryArgs: ({queryArgs}:{queryArgs:ProductQueryParams}) => {
         
        const newQueryArgs = {...queryArgs}
        if (newQueryArgs.skip) {
          return {limit:queryArgs.limit}
        }
        return newQueryArgs;
      },
      merge: (currentCache, newItems) => {
        if (currentCache.products) {
          return {
            ...currentCache,
            ...newItems,
            products: [...currentCache.products, ...newItems.products]
          };
        }
        return newItems;
      },

     // Refetch when the page arg changes
     forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),

    getProduct: builder.query<IProduct, string | number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
