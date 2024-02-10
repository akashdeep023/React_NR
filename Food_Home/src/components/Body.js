import RestaurantCard from "./RestaurantCard";
// import RestaurantList from "../constant";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import Search from "./Search";
import useOnline from "../utils/useOnline";
import RestaurantCollections from "./RestaurantCollections";
// import UserContext from "../utils/UserContext";

const Body = () => {
	const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useAllRestaurants();
	const [searchText, setSearchText] = useState("");
	const giveSearchText = (data) => {
		setSearchText(data);
	};

	// Props drilling ----------------------------------------------------------------
	// Body Component => RestaurantCard Component => <h4>{ ... }</h4>
	// const [user, setUser] = useState({
	// 	name: "jack",
	// 	email: "jack@example.com",
	// });

	// useContext ----------------------------------------------------------------
	// const { user, setUser } = useContext(UserContext);

	const isOnline = useOnline();
	if (!isOnline) {
		return <h1 className="body-box">User was Offline ....</h1>;
	}
	if (!allRestaurants) {
		return <div className="body-box">Data is not Loaded.......!</div>;
	}

	return allRestaurants?.length == 0 ? (
		<Shimmer />
	) : (
		<>
			{/* useContext ------- */}
			{/* <input
				type="text"
				value={user.name}
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<input
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/> */}

			<div className="body-box-res body-box">
				{allRestaurants[0] != undefined ? (
					<>
						<h2 className="topBrandTitle">
							{allRestaurants[0]?.title}
						</h2>
						<div className="topBrand">
							{allRestaurants[1].map((info) => {
								return (
									<Link
										to={
											"/collections/" +
											info?.action?.link
												?.split("=")[1]
												?.split("&")[0]
										}
										key={"collections" + info?.id}
									>
										<RestaurantCollections {...info} />
									</Link>
								);
							})}{" "}
						</div>
						<hr className="topBrandHr" />
					</>
				) : null}
				{allRestaurants[2] != undefined &&
				allRestaurants[5]?.length == filteredRestaurants?.length ? (
					<>
						<h2 className="topBrandTitle">
							{allRestaurants[2].title}
						</h2>
						<div className="topBrand">
							{allRestaurants[3].map((restaurant) => {
								return (
									<Link
										to={"/restaurant/" + restaurant.info.id}
										key={"allres" + restaurant.info.id}
									>
										<RestaurantCard
											{...restaurant.info}
											// user={user} // Props drilling -----------
										/>
									</Link>
								);
							})}
						</div>
						<hr className="topBrandHr" />
					</>
				) : null}

				<div className="main-header-box">
					<h2 className="main-card-title">
						{allRestaurants[4]?.title}
					</h2>
					<div className="main-header-filter">
						<Search
							allRestaurants={allRestaurants[5]}
							setFilteredRestaurants={setFilteredRestaurants}
							giveSearchText={giveSearchText}
						/>
						<button>Fast Delivery</button>
						<button>New on Food</button>
						<button>Ratings 4.0+</button>
						<button>Pure Veg</button>
						<button>Offers</button>
						<button>Less then Rs.300</button>
					</div>
					{filteredRestaurants?.length != 0 ? (
						<div className="main-card">
							{filteredRestaurants?.map((restaurant) => {
								return (
									<Link
										to={
											"/restaurant/" +
											restaurant?.info?.id
										}
										key={"filter" + restaurant?.info?.id}
									>
										<RestaurantCard
											{...restaurant.info}
											// user={user} // Props drilling -----------
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
				</div>
			</div>
		</>
	);
};
export default Body;
