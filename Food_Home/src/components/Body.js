import RestaurantCard from "./Restaurant";
// import RestaurantList from "../constant";
import RestaurantList from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const findRestaurants = (search, restaurants) => {
	const data = restaurants.filter((restaurant) => {
		return restaurant.info.name
			.toLowerCase()
			.includes(search.toLowerCase());
	});
	return data;
};

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState(null);
	console.log("Render()1"); //Change state (useState) than re rendering

	// useEffect render after rendering components (1st render component then render useEffect)
	// empty dependency array => once after render
	// dep array [searchText] => once after initial render + everytime after render (my searchText changes)
	useEffect(() => {
		console.log("useEffect()2");
		// API call
		getRestaurants();
	}, []);

	console.log("Render()2"); //Change state (useState) than re rendering

	const getRestaurants = async function () {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		// console.log(json)
		// Optional Chaining '?'
		setAllRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	if (!allRestaurants) return null;

	if (filteredRestaurants?.length == 0) {
		return (
			<h1 className="main-card">No Restaurant search your match !!</h1>
		);
	}

	return allRestaurants?.length == 0 ? (
		<Shimmer />
	) : (
		<>
			<div id="search-container">
				<input
					type="text"
					placeholder="Search Restaurant"
					value={searchText}
					onChange={(e) => {
						console.log(e.target.value);
						setSearchText(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						const data = findRestaurants(
							searchText,
							allRestaurants
						);
						setFilteredRestaurants(data);
						setSearchText("");
					}}
				>
					Search
				</button>
			</div>
			<div className="main-card">
				{filteredRestaurants.map((restaurant) => {
					return (
						<Link
							to={"/restaurant/" + restaurant.info.id}
							key={restaurant.info.id}
						>
							<RestaurantCard {...restaurant.info} />
						</Link>
					);
				})}
			</div>
		</>
	);
};
export default Body;
