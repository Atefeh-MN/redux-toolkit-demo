import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        decrement: (state,action) => {
            state.value=state.value-action.payload;
        },
        increment: (state,action) => {
            state.value=state.value+action.payload;
        }
    }
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;