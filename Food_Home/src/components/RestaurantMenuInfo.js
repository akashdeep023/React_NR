import React from "react";
import { useState } from "react";
import { IMG_SMALL_URL } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";

function RestaurantMenuInfo(card) {
	const { title, itemCards, resCart } = card;
	const [showMenu, setShowMenu] = useState(true);

	// Redux Store --------------------------------
	const itemsCart = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const addFoodItem = (item) => {
		dispatch(addToCart({ item, resCart }));
	};
	return (
		<div id="res-menu-cardb">
			<div
				className="res-menu-h"
				onClick={() => {
					setShowMenu(showMenu ? false : true);
				}}
			>
				<h4>{title + " (" + itemCards?.length + ")"}</h4>
				{showMenu ? (
					<i className="fa-solid fa-angle-up"></i>
				) : (
					<i className="fa-solid fa-angle-down"></i>
				)}
			</div>
			{showMenu ? (
				<div>
					{itemCards?.map((cardb, index) => {
						return (
							<div id="res-menu-cardele" key={"card" + index}>
								<div>
									{cardb?.card?.info?.itemAttribute
										?.vegClassifier == "VEG" ? (
										<i
											className="fa-regular fa-circle-stop"
											id="item-veg"
										></i>
									) : (
										<i
											className="fa-regular fa-square-caret-up"
											id="item-nonveg"
										></i>
									)}
									<h5>{cardb?.card?.info?.name}</h5>
									<p>
										{"₹" +
											(cardb?.card?.info?.price ??
												cardb?.card?.info
													?.defaultPrice) /
												100}
									</p>
									<p className="card-head">
										{cardb?.card?.info?.description}
									</p>
								</div>
								<div className="menu-img-box">
									{cardb?.card?.info?.imageId ? (
										<img
											className="menu-img"
											src={
												IMG_SMALL_URL +
												cardb?.card?.info?.imageId
											}
										/>
									) : null}
									<button
										id="item-add"
										onClick={() =>
											addFoodItem(cardb?.card?.info)
										}
									>
										{itemsCart?.filter(
											(item) =>
												item?.id ==
												cardb?.card?.info?.id
										).length > 0
											? "Added"
											: "Add"}
										{/* ADD */}
									</button>
								</div>
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default RestaurantMenuInfo;
