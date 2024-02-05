import { IMG_URL } from "../constant";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = (restaurantList) => {
	const {
		name,
		cuisines,
		cloudinaryImageId,
		avgRating,
		sla,
		areaName,
		aggregatedDiscountInfoV3,
		user, //Props drillings
	} = restaurantList;
	return (
		<div className="card">
			<div className="img-box">
				<img className="img" src={IMG_URL + cloudinaryImageId}></img>
				<div className="card-offer">
					<h3 className="card-head">
						{aggregatedDiscountInfoV3?.header}{" "}
						{aggregatedDiscountInfoV3?.subHeader}
					</h3>
				</div>
			</div>
			<h3 className="card-head">{name}</h3>
			<h4>
				{avgRating ? (
					<span>
						<i className="fa-solid fa-star"></i>
					</span>
				) : null}
				{avgRating} • {sla?.slaString}
			</h4>
			<p className="card-head">{cuisines.join(", ")}</p>
			<p>{areaName}</p>
			<h4>
				{/* Props drilling */}
				{user.name} || {user.email}
			</h4>
		</div>
	);
};
export default RestaurantCard;
