import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
	const [restaurant, setRestaurant] = useState([]);
	useEffect(() => {
		getRestaurantMenu();
	}, []);
	const getRestaurantMenu = async () => {
		try {
			// const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=" + resId)
			const data = await fetch(FETCH_MENU_URL + resId);
			const json = await data.json();
			// console.log(json);

			console.log(json?.data?.cards);
			const restInfo = json?.data?.cards?.find((res) =>
				res?.card?.card["@type"]?.includes("food.v2.Restaurant")
			);
			const restOffer = json?.data?.cards?.find((res) =>
				res?.card?.card?.gridElements?.infoWithStyle["@type"]?.includes(
					"food.v2.OfferInfoWithStyle"
				)
			);
			const restMenus = json?.data?.cards?.find((res) =>
				res?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) =>
					menu?.card?.card["@type"]?.includes("food.v2.ItemCategory")
				)
			);
			setRestaurant({ restInfo, restOffer, restMenus });
		} catch (err) {
			console.log(err);
			setRestaurant(null);
		}
	};
	return restaurant;
};

export default useRestaurant;
