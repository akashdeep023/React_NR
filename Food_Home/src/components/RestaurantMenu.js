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

	const resCart = {
		name: restaurant?.cards[0]?.card?.card?.info?.name,
		id: restaurant?.cards[0]?.card?.card?.info?.id,
		areaName: restaurant?.cards[0]?.card?.card?.info?.areaName,
		imgUrl:
			IMG_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId,
		distance: restaurant?.cards[0]?.card?.card?.info?.sla,
	};
	return !restaurant ? (
		<ShimmerMenu />
	) : (
		<div id="res-menu">
			<RestaurantMenuProfile
				{...restaurant?.cards[0]?.card?.card?.info}
			/>
			<div id="res-menu-off">
				{restaurant?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
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
				{restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
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
