import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import { IMG_URL, IMG_SMALL_URL, OFFER_LOGO_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurant = useRestaurant(resId); //Create Hook (Normal javascript function)----
	return !restaurant ? (
		<ShimmerMenu />
	) : (
		<div id="res-menu">
			<div id="res-menu-box">
				<div id="res-menu-name">
					<div>
						<h3>{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
						<p>
							{restaurant?.cards[0]?.card?.card?.info?.cuisines.join(
								", "
							)}
						</p>
						<p>
							{restaurant?.cards[0]?.card?.card?.info?.areaName},{" "}
							{
								restaurant?.cards[0]?.card?.card?.info?.sla
									?.lastMileTravelString
							}
						</p>
					</div>
					<div>
						<h4 className="rating">
							<i className="fa-solid fa-star"></i>
							{restaurant?.cards[0]?.card?.card?.info
								?.avgRatingString || "-- --"}
						</h4>
						<hr />
						<p className="rating-tot">
							{restaurant?.cards[0]?.card?.card?.info
								?.totalRatingsString || "0+ ratings"}
						</p>
					</div>
				</div>
				<div id="res-menu-price">
					<h4>
						<i className="fa-regular fa-handshake"></i>{" "}
						{restaurant?.cards[0]?.card?.card?.info?.sla?.slaString}{" "}
						&nbsp;&nbsp;&nbsp;&nbsp;
						<i className="fa-solid fa-indian-rupee-sign"></i>{" "}
						{
							restaurant?.cards[0]?.card?.card?.info
								?.costForTwoMessage
						}
					</h4>
				</div>

				<img
					id="res-menu-img"
					src={
						IMG_URL +
						restaurant?.cards[0]?.card?.card?.info
							?.cloudinaryImageId
					}
				/>
			</div>
			<div id="res-menu-off">
				{restaurant?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
					(offers, idx) => {
						return (
							<div id="res-menu-offbox" key={"offer" + idx}>
								{offers?.info?.offerTag ? (
									<>
										<div className="res-menu-flat">
											{offers?.info?.offerTag}
										</div>
										<div className="res-menu-flath"></div>
									</>
								) : null}
								<div>
									<h4>
										<img
											src={
												OFFER_LOGO_URL +
												offers?.info?.offerLogo
											}
										/>
										{offers?.info?.header}
									</h4>
									<div>
										<h5>
											{offers?.info?.couponCode} |&nbsp;
											{offers?.info?.description}
										</h5>
									</div>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div id="res-menu-cardbox">
				{restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
					(cardbox, idx) => {
						return cardbox?.card?.card?.itemCards ? (
							<div id="res-menu-cardb" key={"cardbox" + idx}>
								<h4>
									{cardbox?.card?.card?.title +
										" (" +
										cardbox?.card?.card?.itemCards?.length +
										")"}
								</h4>
								{cardbox?.card?.card?.itemCards?.map(
									(cardb, index) => {
										return (
											<div
												id="res-menu-cardele"
												key={"card" + index}
											>
												<div>
													{cardb?.card?.info
														?.itemAttribute
														?.vegClassifier ==
													"VEG" ? (
														<i
															class="fa-regular fa-circle-stop"
															id="item-veg"
														></i>
													) : (
														<i
															class="fa-regular fa-square-caret-up"
															id="item-nonveg"
														></i>
													)}
													<h5>
														{
															cardb?.card?.info
																?.name
														}
													</h5>
													<p>
														{"₹" +
															cardb?.card?.info
																?.price /
																100}
													</p>
													<p className="card-head">
														{
															cardb?.card?.info
																?.description
														}
													</p>
												</div>
												{cardb?.card?.info?.imageId ? (
													<div className="menu-img-box">
														<img
															className="menu-img"
															src={
																IMG_SMALL_URL +
																cardb?.card
																	?.info
																	?.imageId
															}
														/>
														<button id="item-add">ADD</button>
													</div>
												) : null}
											</div>
										);
									}
								)}
							</div>
						) : null;
					}
				)}
			</div>
		</div>
	);
};
export default RestaurantMenu;
