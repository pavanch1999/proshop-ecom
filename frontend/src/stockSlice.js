import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        data: [],
        selectedSymbol: 'GOOG',
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setSelectedSymbol: (state, action) => {
            state.selectedSymbol = action.payload;
        },
    },
});

export const { setData, setSelectedSymbol } = stockSlice.actions;
export const selectStock = (state) => state.stock.data;
export const selectSelectedSymbol = (state) => state.stock.selectedSymbol;
export default stockSlice.reducer;
