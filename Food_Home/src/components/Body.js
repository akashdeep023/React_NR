import RestaurantCard from "./RestaurantCard";
// import RestaurantList from "../constant";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import Search from "./Search";
import useOnline from "../utils/useOnline";
import RestaurantCollections from "./RestaurantCollections";
import Filter from "./Filter";
import { IMG_NOT_FOUND_URL } from "../constant";
import OfflineImage from "../assets/img/Offline.png";
import { IMG_OFFLINE_URL } from "../constant";
// import UserContext from "../utils/UserContext";

const Body = () => {
	const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useAllRestaurants();

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
		return (
			<div className="offline-page">
				<img alt="local img" src={OfflineImage} />
				<img alt="url img" src={IMG_OFFLINE_URL} />
			</div>
		);
	}
	if (!allRestaurants) {
		return <div className="body-box">Data is not Loaded.......!</div>;
	}
	if (allRestaurants[6]) {
		return (
			<div className="body-box unservice-page">
				<img src={allRestaurants[6]?.imageLink} />
				<h3 className="">{allRestaurants[6]?.title}</h3>
				<p>We don’t have any services here till now.</p>
				<p>Try changing location.</p>
			</div>
		);
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
					<div className="main-header-box">
						{/* <h2 className="topBrandTitle"> */}
						<h2 className="main-card-title">
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
					</div>
				) : null}
				{allRestaurants[2] != undefined ? (
					<div className="main-header-box">
						<h2 className="main-card-title">
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
					</div>
				) : null}

				<div className="main-header-box">
					<h2 className="main-card-title">
						{allRestaurants[4]?.title}
					</h2>
					<div className="main-header-filter">
						<Search
							allRestaurants={allRestaurants[5]}
							setFilteredRestaurants={setFilteredRestaurants}
						/>
						<Filter
							Restaurant={allRestaurants[5]}
							setRestaurant={setFilteredRestaurants}
						/>
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
							<p>No Restaurant Found !!</p>
							<img src={IMG_NOT_FOUND_URL} />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default Body;
