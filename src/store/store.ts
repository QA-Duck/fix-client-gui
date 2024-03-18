import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sessionReducers from "./reducers/SessionSlice"
import { sessionApi } from "./services/SessionService";

const rootReducer = combineReducers({
    sessionReducers,
    [sessionApi.reducerPath]: sessionApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare().concat(sessionApi.middleware)
})

export const setupStore = () => {
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']