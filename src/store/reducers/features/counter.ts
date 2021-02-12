import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => async (
	dispatch: AppDispatch
) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export default counterSlice.reducer;