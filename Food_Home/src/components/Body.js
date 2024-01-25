import RestaurantCard from "./Restaurant";
import RestaurantList from "../../constant";
const Body = () => {
	return (
		<>
			<div id="search-container">
				<input type="text" placeholder="Search Restaurant" />
				<button>Search</button>
			</div>
			<div className="main-card">
				{RestaurantList.map((restaurant) => {
					return (
						<RestaurantCard
							{...restaurant.data}
							key={restaurant.data.id}
						/>
					);
				})}
			</div>
		</>
	);
};
export default Body;
