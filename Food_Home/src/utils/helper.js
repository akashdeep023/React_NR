export const findRestaurants = (search, restaurants) => {
	const data = restaurants.filter((restaurant) => {
		return restaurant.info.name
			.toLowerCase()
			.includes(search.toLowerCase());
	});
	return data;
};

export const findRestaurantsRating = (res, setRes) => {
	const data = res?.filter((res) => res?.info?.avgRating >= 4);
	setRes(data);
};
export const findRestaurantsFast = (res, setRes) => {
	const data = res?.filter((res) => res?.info?.sla?.deliveryTime <= 25);
	setRes(data);
};
export const findRestaurantsOffer = (res, setRes) => {
	const data = res?.filter((res) =>
		res?.info?.aggregatedDiscountInfoV3?.header?.includes("OFF")
	);
	setRes(data);
};
