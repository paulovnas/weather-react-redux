import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActual } from "../interfaces/Weather";

const initialState = {
	city: localStorage.getItem('city') as string || "",
    loading: false,
    actual: {} as IActual,
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
        updateCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
		},
        updateLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
		},
        updateActual: (state, action: PayloadAction<IActual>) => {
            state.actual = action.payload;
        }
	},
});

export const { 
	updateCity,
    updateLoading,
    updateActual
} = weatherSlice.actions;

export default weatherSlice.reducer;