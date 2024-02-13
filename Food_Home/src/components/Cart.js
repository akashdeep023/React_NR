import { useDispatch, useSelector } from "react-redux";
import CartInfo from "./CartInfo";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import CartEmpty from "../assets/img/Cart-empty.png";
import { Link } from "react-router-dom";

const Cart = () => {
	const [contact, setContect] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const cartItems = useSelector((store) => store.cart);
	useEffect(() => {
		setTotalPrice(
			cartItems?.items?.reduce(
				(sum, item) => sum + (item?.defaultPrice || item?.price),
				0
			)
		);
	});
	const dispatch = useDispatch();
	const clearFoodItems = () => {
		dispatch(clearCart());
	};
	return !cartItems.restaurant ? (
		<div className="body-box cart-empty">
			<img src={CartEmpty} />
			<h3>Your cart is empty</h3>
			<p>You can go to home page to view more restaurants</p>
			<Link to="/">
				<button>SEE RESTAURANTS NEAR YOU</button>
			</Link>
		</div>
	) : (
		<div className="body-box cart-page">
			<h1 className="cart-h">
				Cart
				<button
					className="cart-clear-btn"
					onClick={() => {
						clearFoodItems();
					}}
				>
					Clear Cart
				</button>
			</h1>
			<div className="cart-main">
				<div className="cart-rest">
					{cartItems?.restaurant && (
						<img src={cartItems?.restaurant?.imgUrl}></img>
					)}
					<div>
						<h3>{cartItems?.restaurant?.name}</h3>
						<p>{cartItems?.restaurant?.areaName}</p>
					</div>
				</div>
				<div className="cart-box">
					{cartItems?.items?.map((item, idx) => {
						return <CartInfo key={"card-box" + idx} {...item} />;
					})}
				</div>
				<div className="cart-bills">
					<div className="cart-opt">
						<div className="cart-check">
							<input
								type="checkbox"
								onClick={() => {
									setContect(contact ? false : true);
								}}
							/>
						</div>
						<div>
							<p>Opt in for No-contact Delivery</p>
							{contact ? (
								<p>
									Our delivery partner will call to confirm.
									Please ensure that your address has all the
									required details.
								</p>
							) : (
								<p>
									Unwell, or avoiding contact? Please select
									no-contact delivery. Partner will safely
									place the order outside your door (not for
									COD)
								</p>
							)}
						</div>
					</div>
					<p>Bill Details</p>
					<div className="cart-bill-his">
						<p>Item Total</p>
						<p>{"₹" + totalPrice / 100}</p>
					</div>
					<div className="cart-bill-his">
						<p>
							Delivery Fee
							{" | " +
								(cartItems?.restaurant?.distance
									?.lastMileTravelString ?? "2km")}
						</p>
						<p>
							₹
							{(cartItems?.restaurant?.distance?.lastMileTravel ??
								2) * 20}
						</p>
					</div>
					<div className="cart-bill-his">
						<p>GST and Restaurant Charges</p>
						<p>₹{(totalPrice * 18) / 10000}</p>
					</div>
					<div className="cart-bill-his to-pay">
						<p>To Pay </p>
						<p>
							₹
							{(totalPrice * 118) / 10000 +
								(cartItems?.restaurant?.distance
									?.lastMileTravel ?? 2) *
									20}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
