import { IMG_URL } from "../constant";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = (restaurantList) => {
	const { name, cuisines, cloudinaryImageId, avgRating ,sla, areaName } = restaurantList;
	return (
		<div className="card">
			<img className="img" src={IMG_URL + cloudinaryImageId}></img>
			<h3 className="card-head">{name}</h3>
				<h4>{avgRating} stars • {sla?.slaString} </h4>
			<p className="card-head">{cuisines.join(", ")}</p>
			<p>{ areaName }</p>
		</div>
	);
};
export default RestaurantCard;
