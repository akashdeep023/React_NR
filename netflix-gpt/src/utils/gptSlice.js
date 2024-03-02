import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		gptSearchPage: false,
		gptSearchNames: null,
		gptSearchMovies: null,
	},
	reducers: {
		toggleGptSarch: (state, action) => {
			state.gptSearchPage = !state.gptSearchPage;
		},
		setGptMoviesSearch: (state, action) => {
			const { gptSearchNames, gptSearchMovies } = action.payload;
			state.gptSearchNames = gptSearchNames;
			state.gptSearchMovies = gptSearchMovies;
		},
	},
});
export const { toggleGptSarch, setGptMoviesSearch } = gptSlice.actions;
export default gptSlice.reducer;
