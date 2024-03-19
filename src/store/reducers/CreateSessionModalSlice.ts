import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    createSessionModalIsOpen: boolean
} = {
    createSessionModalIsOpen: false
}

export const createSessionModalSlice = createSlice({
    name: "createSessionModalSlice",
    initialState,
    reducers: {
        closeModal(state) {
            state.createSessionModalIsOpen = false
        },
        openModal(state) {
            state.createSessionModalIsOpen = true
        }
    }
})

export default createSessionModalSlice.reducer