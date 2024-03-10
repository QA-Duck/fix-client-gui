import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sessionReducers from "./reducers/SessionSlice"

const rootReducer = combineReducers({
    sessionReducers,
})

export const store = configureStore({
    reducer: rootReducer
})

export const setupStore = () => {
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']