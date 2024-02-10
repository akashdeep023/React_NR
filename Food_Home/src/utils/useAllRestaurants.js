import { useState, useEffect } from "react";
import { FETCH_REST_URL } from "../constant";

const useAllRestaurants = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState(null);
	console.log("Render()"); //Change state (useState) than re rendering
	// useEffect render after rendering components (1st render component then render useEffect)
	// empty dependency array => once after render
	// dep array [searchText] => once after initial render + everytime after render (my searchText changes)
	useEffect(() => {
		console.log("useEffect()");
		// API call
		getRestaurants();
	}, []);

	const getRestaurants = async function () {
		const data = await fetch(FETCH_REST_URL);
		const json = await data.json();
		console.log(json);

		const topBrand = json?.data?.cards?.find((res) =>
			res?.card?.card?.id?.includes("top_brands_for_you")
		);
		const allRests = json?.data?.cards?.find((res) =>
			res?.card?.card?.id?.includes("restaurant_grid_listing")
		);
		const allRestsTitle = json?.data?.cards?.find((res) =>
			res?.card?.card?.id?.includes("popular_restaurants_title")
		);
		const infoLink = json?.data?.cards?.find((res) =>
			res?.card?.card?.id?.includes("whats_on_your_mind")
		);
		// Optional Chaining '?'
		setAllRestaurants([
			infoLink?.card?.card?.header,
			infoLink?.card?.card?.gridElements?.infoWithStyle?.info,
			topBrand?.card?.card?.header, // Top Brand title
			topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants, //20 items
			allRestsTitle?.card?.card,
			allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants, //9 items
		]);
		setFilteredRestaurants(
			allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants //9 items
		);
	};
	return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};
export default useAllRestaurants;
