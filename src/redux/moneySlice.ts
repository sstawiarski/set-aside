import { createSlice } from "@reduxjs/toolkit";

export interface MoneyState {
    [key: string]: number;
}

export interface MoneyAction {
    type: string;
    payload: {
        value: number;
        source: string;
        destination: string
    }
}

const initialState: MoneyState = {
    toBeBudgeted: 0,
    test: 25
};

export const moneySlice = createSlice({
    name: 'money',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        //condense category rows (ultimately removes padding)
        moveMoney: (state: MoneyState, action: MoneyAction) => {
            const { destination, value, source } = action.payload;
            if (!Object.keys(state).includes(source)) return;
            else {
                state[destination] ? state[destination] += value : state[destination] = value;
                state[source] -= value;
            }
        }
    }
});

export const { moveMoney } = moneySlice.actions;

export default moneySlice.reducer;
