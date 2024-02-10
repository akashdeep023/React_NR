import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useCollections from "../utils/useCollections";

const RestaurantCollectionsInfo = (info) => {
	const { resId } = useParams();
	const restaurant = useCollections(resId);
	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="body-box-res body-box">
			<div className="main-header-box">
				<h2 className="main-card-title">
					{restaurant[0]?.card?.card?.title}
				</h2>
				<p
					className="main-card-title"
					style={{ marginTop: "-15px", marginBottom: "-10px" }}
				>
					{restaurant[0]?.card?.card?.description}
				</p>
				<h2 className="main-card-title">Restaurants to explore</h2>
				<div className="main-card">
					{restaurant?.map((restaurant) => {
						return restaurant?.card?.card?.info ? (
							<Link
								to={
									"/restaurant/" +
									restaurant?.card?.card?.info?.id
								}
								key={
									"infoCard" +
									restaurant?.card?.card?.info?.id
								}
							>
								<RestaurantCard
									{...restaurant?.card?.card?.info}
								/>
							</Link>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
};
export default RestaurantCollectionsInfo;