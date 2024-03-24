import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IFixSubscription from "../models/IFixSubscription";


export const subscriptionsApi = createApi({
    reducerPath: "subscriptionsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080"}),
    endpoints: (build) => ({
        fetchSessionSubscriptions: build.query<IFixSubscription[], string>({
            query: (args) => ({
                url: `/subscriptions/select/session/${args}` 
            })
        })
    })
})