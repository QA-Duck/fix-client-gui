import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const sessionApi = createApi({
    reducerPath: "sessionAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080"}),
    endpoints: (build) => ({
        fetchSessionStatus: build.query({
            query: () => ({
                url: "/sessions/status"
            })
        })
    })
})