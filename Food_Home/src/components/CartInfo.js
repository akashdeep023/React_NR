import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";

const CartInfo = (item) => {
	const { name, itemAttribute, price, defaultPrice } = item;
	const dispatch = useDispatch();
	const removeFoodItem = (i) => {
		dispatch(removeFromCart(i));
	};
	return (
		<div className="cart-info">
			{itemAttribute?.vegClassifier == "VEG" ? (
				<i className="fa-regular fa-circle-stop" id="item-veg"></i>
			) : (
				<i
					className="fa-regular fa-square-caret-up"
					id="item-nonveg"
				></i>
			)}
			<p className="cart-info-name">{name}</p>
			<button
				className="cart-remove-btn"
				onClick={() => {
					removeFoodItem(item);
				}}
			>
				Remove
			</button>
			<p>{"₹" + (price || defaultPrice) / 100}</p>
		</div>
	);
};
export default CartInfo;
