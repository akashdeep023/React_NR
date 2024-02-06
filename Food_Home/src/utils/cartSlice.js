import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		restaurant: null,
	},
	reducers: {
		addToCart: (state, action) => {
			if (state.restaurant === null) {
				state.restaurant = action.payload.resCart;
				state.items.push(action.payload.item);
			} else if (state.restaurant.id != action.payload.resCart.id) {
				state.restaurant = action.payload.resCart;
				state.items = [action.payload.item];
			} else {
				state.items.push(action.payload.item);
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			if (state.items.length == 0) {
				state.restaurant = null;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.restaurant = null;
		},
	},
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
