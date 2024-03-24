import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSessionModalReducers from "./reducers/CreateSessionModalSlice"
import sessionLogWindowReducers from "./reducers/SessionScreenSlice";
import { sessionApi } from "./services/SessionService";
import { subscriptionsApi } from "./services/SubscriptionService";


const rootReducer = combineReducers({
    createSessionModalReducers,
    sessionLogWindowReducers,
    [sessionApi.reducerPath]: sessionApi.reducer,
    [subscriptionsApi.reducerPath] : subscriptionsApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare()
        .concat(sessionApi.middleware)
        .concat(subscriptionsApi.middleware)
})

export const setupStore = () => {
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']