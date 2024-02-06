import { useDispatch, useSelector } from "react-redux";
import CartInfo from "./CartInfo";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
	const [contact, setContect] = useState(false);
	const cartItems = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	const clearFoodItems = () => {
		dispatch(clearCart());
	};
	return !cartItems.restaurant ? (
		<div className="body-box">
			<h3>Card Empty</h3>
		</div>
	) : (
		<div className="body-box">
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
						<input
							type="checkbox"
							onClick={() => {
								setContect(contact ? false : true);
							}}
						/>
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
						<p>Total Price</p>
						<p>{}</p>
					</div>
					<div className="cart-bill-his">
						<p>
							Delivery Fee
							{" | " +
								cartItems?.restaurant?.distance
									?.lastMileTravelString}
						</p>
						<p>
							{"₹" +
								cartItems?.restaurant?.distance
									?.lastMileTravel *
									20}
						</p>
					</div>
					<div className="cart-bill-his">
						<p>Total Price </p>
						<p>{}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
