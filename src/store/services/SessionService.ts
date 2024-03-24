import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IFixSessionShortInfo from "../models/IFixSessionShortInfo";


export const sessionApi = createApi({
    reducerPath: "sessionAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080"}),
    endpoints: (build) => ({
        fetchSessionStatus: build.query<IFixSessionShortInfo[], null>({
            query: () => ({
                url: "/sessions/select"
            })
        })
    })
})