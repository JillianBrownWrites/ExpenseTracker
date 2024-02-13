import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
    "housing",
    "food",
    "transportation",
    "utilities",
    "clothing",
    "healthcare",
    "personal",
    "education",
    "entertainment",
];
const initialState = Object.fromEntries(
    CATEGORIES.map((category) => [category, []])
);

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => 
    Object.values(state.transaction).reduce((a, b) => [...a, ...b], []);

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        const addTransaction: (state, action) => {
            const { category } = action.payload;
            state[category].push(action.payload);
        },
        const deleteTransaction: (state, action) > {
            const { category, id } = action.payload;
            state[category] = state[category].filter(tranaction => transaction.id !== id);
        },
    },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;