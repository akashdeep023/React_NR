export const findRestaurants = (search, restaurants) => {
	const data = restaurants.filter((restaurant) => {
		return restaurant.info.name
			.toLowerCase()
			.includes(search.toLowerCase());
	});
	return data;
};
