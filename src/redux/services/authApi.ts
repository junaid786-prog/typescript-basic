import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { User } from "../../utils/types"

export interface GetUserResponse {
    user: User,
    success: boolean,
}
export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["POST"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api"
    }),
    endpoints: (builder) => ({
        login: builder.mutation<GetUserResponse, any>({
            query: (payload) => ({ 
                url: '/login',
                body: payload,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            }),
            transformResponse: (response: any) => {
                const { user, success } = response
                return { user, success } as GetUserResponse
            },
            invalidatesTags: ['POST']
        })
    })
})

export const { useLoginMutation } = authApi