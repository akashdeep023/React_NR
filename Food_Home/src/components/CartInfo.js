import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartInfo = (item) => {
	const { name, itemAttribute, price, defaultPrice } = item;
	const dispatch = useDispatch();
	const removeFoodItem = (i) => {
		dispatch(removeFromCart(i));
	};
	return (
		<div className="cart-info">
			<div>
				{itemAttribute?.vegClassifier == "VEG" ? (
					<i className="fa-regular fa-circle-stop" id="item-veg"></i>
				) : (
					<i
						className="fa-regular fa-square-caret-up"
						id="item-nonveg"
					></i>
				)}
				<p className="cart-info-name">{name}</p>
			</div>
			<div>
				<button
					className="cart-remove-btn"
					onClick={() => {
						removeFoodItem(item);
						toast.success("Item removed successfully");
					}}
				>
					Remove
				</button>
				<p>{"₹" + (price || defaultPrice) / 100}</p>
			</div>
		</div>
	);
};
export default CartInfo;
