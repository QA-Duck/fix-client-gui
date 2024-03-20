import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ClientSessionState {
    uuid: string
    messages: string[]
    isOpenStream: boolean
}

const initialState: {
    clientsStreamIsOpen: string[],
    messages: {[uuid: string]: string[]}
} = {
    clientsStreamIsOpen: [],
    messages: {}
}

export const sessionScreenSlice = createSlice({
    name: "sessionScreenSlice",
    initialState,
    reducers: {
        openMessageStream(state, action: PayloadAction<string>) {
            if(!state.clientsStreamIsOpen.includes(action.payload)) {
                state.clientsStreamIsOpen.push(action.payload)
            } else {
                console.warn("Stream client {} already open", action.payload)
            }
        },
        pushMessage(state, action: PayloadAction<{uuid: string, message: string}>) {
            const uuid = action.payload.uuid
            const message = action.payload.message
            if(uuid in state.messages) {
                state.messages[uuid].push(message)
            } else {
                state.messages[uuid] = [message]
            }
        },
        clearMessages(state, action: PayloadAction<string>) {
            state.messages[action.payload] = []
        }
    }
})

export default sessionScreenSlice.reducer