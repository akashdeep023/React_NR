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
	} = restaurantList;
	return (
		<div className="w-[290px] hover:scale-95 transition-all">
			<div className="h-52 w-full overflow-hidden rounded-3xl relative">
				<img
					className="h-52"
					src={IMG_URL + cloudinaryImageId}
				></img>
				<div className="bg-gradient-to-t from-black/100  bg-black-900 w-full h-20 relative bottom-20">
					<h3 className="font-bold text-2xl text-white absolute bottom-0 px-3 py-2">
						{aggregatedDiscountInfoV3?.header}{" "}
						{aggregatedDiscountInfoV3?.subHeader}
					</h3>
				</div>
			</div>
			<h3 className="card-head font-bold ml-2 text-xl text-gray-700">{name}</h3>
			<h4 className="font-semibold">
				{avgRating ? (
					<span className="mr-1">
						<i className="fa-solid fa-star ml-2"></i>
					</span>
				) : null}
				{avgRating} • {sla?.slaString}
			</h4>
			<p className="card-head ml-2 text-gray-400">{cuisines.join(", ")}</p>
			<p className="ml-2 text-gray-400">{areaName}</p>
		</div>
	);
};
export default RestaurantCard;
