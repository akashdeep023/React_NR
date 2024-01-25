import { IMG_URL } from "../../constant";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = (restaurantList) => {
	const { name, cuisines, cloudinaryImageId, avgRating } = restaurantList;
	return (
		<div className="card">
			<img className="img" src={IMG_URL + cloudinaryImageId}></img>
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<h4>{avgRating} star</h4>
		</div>
	);
};
export default RestaurantCard;
