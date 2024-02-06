import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
});
export default store;

/**
 * Create Store
 *  - configureStore({   -> RTK
 *      reducer:{
 *       }
 *   })
 *
 * Provide my store to app
 *  -<Provider store={store} /> -> react-redux
 *
 * Slice
 *  - createSlice({ 	-> RKT
 *      name: "",
 *      initialState:{
 *          reducers:{
 *              addItem:(state,action) =>{state=action.payload}
 *            }
 *      })
 *      export const {addItem} = cartSlice.actions;
 *      export default cartSlice.reducer;
 *
 * Put the Slice into Store
 *  - {
 *     reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *          }
 *     }
 *
 */
