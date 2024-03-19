import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface ClientMessages {
    client_uuid: string,
    messages: string[]
}

const initialState: {
    clients: ClientMessages[]
} = {
    clients: []
}


export const sessionLogWindowSlice = createSlice({
    name: "SessionLogWindowSlice",
    initialState,
    reducers: {
        pushMessage(state, action: PayloadAction<{client_uuid: string, message: string}>) {
            let messages = state.clients
                .find(client => client.client_uuid == action.payload.client_uuid)?.messages
            if (messages !== undefined) {
                messages.push(action.payload.message)
            } else [
                messages = [action.payload.message]
            ]
        },
        clearMessages(state, action: PayloadAction<string>) {
            let messges = state.clients.find(client => client.client_uuid == action.payload)?.messages;
            if (messges != undefined) {
                messges = []
            }
        }
    }
})

export default sessionLogWindowSlice.reducer