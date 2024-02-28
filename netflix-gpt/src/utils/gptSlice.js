import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		gptSearchPage: false,
	},
	reducers: {
		toggleGptSarch: (state, action) => {
			state.gptSearchPage = !state.gptSearchPage;
		},
	},
});
export const { toggleGptSarch } = gptSlice.actions;
export default gptSlice.reducer;
