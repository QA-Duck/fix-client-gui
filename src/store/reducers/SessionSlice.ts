import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import IFixSessionGroup from "../../models/IFixSessionGroup"
import { RootState } from "../store"

const initialState: {
    [id:string]: IFixSessionGroup
} = {
    "10.10.10.10":{
        name: "10.10.10.10",
        isOpen: true,
        connections: [{
            id: "wef-wef-efw",
            name: "FIX -> FIX",
            status: false
        }]
    }
}

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        toggleSideBar(state, action: PayloadAction<string>) {
            const name = action.payload
            const group = state[name]
            group.isOpen = !group.isOpen
            state = {...state, group}         
        },

        put(state, action: PayloadAction<IFixSessionGroup>) {
            state[action.payload.name] = action.payload
        }
    }
})

const items = (state: RootState) => state.sessionReducers

export const groupListSelector = createSelector([items], (items) => {
    return Object.entries(items).map(f => f[1])
})

export default sessionSlice.reducer