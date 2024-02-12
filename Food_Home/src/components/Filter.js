import { useState } from "react";
import {
	findRestaurantsFast,
	findRestaurantsOffer,
	findRestaurantsRating,
} from "../utils/helper";

const Filter = ({ Restaurant, setRestaurant }) => {
	const [filter, setFilter] = useState("All");
	return (
		<>
			<button
				onClick={() => {
					setRestaurant(Restaurant);
					setFilter("All");
				}}
				id={filter == "All" ? "filterSelected" : ""}
			>
				All Restaurant
				{filter == "All" && <i class="fa-solid fa-xmark"></i>}
			</button>
			<button
				onClick={() => {
					findRestaurantsFast(Restaurant, setRestaurant);
					setFilter("Fast");
				}}
				id={filter == "Fast" ? "filterSelected" : ""}
			>
				Fast Delivery
				{filter == "Fast" && <i class="fa-solid fa-xmark"></i>}
			</button>
			<button
				onClick={() => {
					findRestaurantsRating(Restaurant, setRestaurant);
					setFilter("Rating");
				}}
				id={filter == "Rating" ? "filterSelected" : ""}
			>
				Ratings 4.0+
				{filter == "Rating" && <i class="fa-solid fa-xmark"></i>}
			</button>
			<button
				onClick={() => {
					findRestaurantsOffer(Restaurant, setRestaurant);
					setFilter("Offer");
				}}
				id={filter == "Offer" ? "filterSelected" : ""}
			>
				Offers
				{filter == "Offer" && <i class="fa-solid fa-xmark"></i>}
			</button>
		</>
	);
};
export default Filter;
