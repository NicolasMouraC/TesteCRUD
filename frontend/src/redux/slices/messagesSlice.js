import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        messages: [],
        messagesNum: 0
    },
    reducers: {
        addMessage:(state, action) => {
            state.messages.push({...action.payload, id: state.messagesNum});
            state.messagesNum++;
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter(message => message.id !== action.payload.messageId);
        }
    }
})

export const selectMessages = (state) => state.messages.messages;
export const { addMessage, deleteMessage } = messagesSlice.actions;
export default messagesSlice.reducer;