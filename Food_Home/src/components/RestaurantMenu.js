import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import { IMG_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import RestaurantMenuProfile from "./RestaurantMenuProfile";
import RestaurantMenuOffer from "./RestaurantMenuOffer";
import RestaurantMenuInfo from "./RestaurantMenuInfo";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurant = useRestaurant(resId); //Create Hook (Normal javascript function) -------

	// ----------------------------
	// const restInfo = restaurant?.cards?.find((res) =>
	// 	res?.card?.card["@type"]?.includes("food.v2.Restaurant")
	// );
	console.log("component Render");
	// ----------------------------

	const resCart = {
		name: restaurant?.restInfo?.card?.card?.info?.name,
		id: restaurant?.restInfo?.card?.card?.info?.id,
		areaName: restaurant?.restInfo?.card?.card?.info?.areaName,
		imgUrl:
			IMG_URL + restaurant?.restInfo?.card?.card?.info?.cloudinaryImageId,
		distance: restaurant?.restInfo?.card?.card?.info?.sla,
	};
	return !restaurant ? (
		<ShimmerMenu />
	) : (
		<div id="res-menu">
			<RestaurantMenuProfile
				{...restaurant?.restInfo?.card?.card?.info}
			/>
			<div id="res-menu-off">
				{restaurant?.restOffer?.card?.card?.gridElements?.infoWithStyle?.offers.map(
					(offers, idx) => {
						return (
							<RestaurantMenuOffer
								key={"offers" + idx}
								{...offers?.info}
							/>
						);
					}
				)}
			</div>
			<div id="res-menu-cardbox">
				{restaurant?.restMenus?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
					(cardbox, idx) => {
						return cardbox?.card?.card?.itemCards ? (
							<RestaurantMenuInfo
								key={"cardbox" + idx}
								{...cardbox?.card?.card}
								resCart={resCart}
							/>
						) : null;
					}
				)}
			</div>
		</div>
	);
};
export default RestaurantMenu;
