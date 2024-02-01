import { useState, useEffect } from 'react';
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
		// Optional Chaining '?'
		setAllRestaurants(
			json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants ||
				json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
		);
		setFilteredRestaurants(
			json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants ||
				json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants ||
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
		);
    };
    return [allRestaurants, filteredRestaurants ,setFilteredRestaurants];
}
export default useAllRestaurants;