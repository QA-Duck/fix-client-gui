import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import IFixSessionGroup from "../../models/IFixSessionGroup"

const initialState: Map<string, IFixSessionGroup> = new Map()

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        toggleSideBar(state, action: PayloadAction<string>) {
            let group = state.get(action.payload)
            if (group?.isOpen != undefined) {
                group.isOpen = !group.isOpen
            }
        },

        put(state, action: PayloadAction<IFixSessionGroup>) {
            let newS = state
            newS.set(action.payload.name, action.payload)
            state = {...newS}
        }
    }
})

export default sessionSlice.reducer