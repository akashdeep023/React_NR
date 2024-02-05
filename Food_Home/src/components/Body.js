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

	// Props drilling ----------------------------------------------------------------
	// Body Component => RestaurantCard Component => <h4>{ ... }</h4>
	const [user, setUser] = useState({
		name: "jack",
		email: "jack@example.com",
	});

	const isOnline = useOnline();
	if (!isOnline) {
		return <h1 className="body-box">User was Offline ....</h1>;
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
				<div className="main-card body-box">
					{filteredRestaurants.map((restaurant) => {
						return (
							<Link
								to={"/restaurant/" + restaurant.info.id}
								key={restaurant.info.id}
							>
								<RestaurantCard
									{...restaurant.info}
									user={user}
								/>
							</Link>
						);
					})}
				</div>
			) : (
				<div className="body-box search-empty">
					No Restaurant search your match !! "{searchText}"
				</div>
			)}
		</>
	);
};
export default Body;
