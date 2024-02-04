import RestaurantCard from "./RestaurantCard";
// import RestaurantList from "../constant";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import Search from "./Search";
import useOnline from "../utils/useOnline";

const Body = () => {
	const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useAllRestaurants();
	const [searchText, setSearchText] = useState("");
	const giveSearchText = (data) => {
		setSearchText(data);
	};

	const isOnline = useOnline();
	if (!isOnline) {
		return (
			<h1 className="body-box">User was Offline ....</h1>
		)
	}
	if (!allRestaurants)
		return <div className="body-box">Data is not Loaded.......!</div>;

	return allRestaurants?.length == 0 ? (
		<Shimmer />
	) : (
		<>
			<Search
				allRestaurants={allRestaurants}
				setFilteredRestaurants={setFilteredRestaurants}
				giveSearchText={giveSearchText}
			/>
			{filteredRestaurants?.length != 0 ? (
				<div className="flex flex-wrap gap-7 w-full justify-center min-h-64">
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
			) : (
				<div className="body-box search-empty min-h-64">
					No Restaurant search your match !! "{searchText}"
				</div>
			)}
		</>
	);
};
export default Body;
