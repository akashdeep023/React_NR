// import React from "react";
import ReactDOM from "react-dom/client";
const restaurantList = require("./data.js");
// console.log(restaurantList);

const Title = () => {
	return (
		<a href="/">
			<img
				className="logo"
				alt="logo"
				src="https://img.freepik.com/free-vector/food-house-logo-template-design_460848-17086.jpg?w=826&t=st=1705943466~exp=1705944066~hmac=41e5d9489a2ce1827a485b789385e4333e727460504681f1488b802dd2a157a3"
			/>
		</a>
	);
};
const Header = () => {
	return (
		// <> == React.Fragment
		<div className="header">
			<Title />
			<ul className="nav-items">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

// Restaurant card component: Image, name, cuisine
const RestaurantList = (restaurantList) => {
	const { name, cuisines, cloudinaryImageId, avgRating } = restaurantList;
	return (
		<div className="card">
			<img
				className="img"
				src={
					"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
					cloudinaryImageId
				}
			></img>
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<h4>{avgRating} star</h4>
		</div>
	);
};
const Body = () => {
	return (
		<div className="main-card">
			{/* <RestaurantList {...restaurantList[0].data} />
			<RestaurantList {...restaurantList[1].data} />
			<RestaurantList {...restaurantList[2].data} />
			<RestaurantList {...restaurantList[3].data} />
			<RestaurantList {...restaurantList[4].data} /> */}
			{restaurantList.map((restaurant) => {
				return (
					<RestaurantList {...restaurant.data} key={restaurant.data.id} />
				);
			})}
		</div>
	);
};
const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright © 2021 Swiggy</p>
        </div>
    )
}
const AppLayout = () => {
	return (
		<>
			<Header />
            <Body />
            <Footer />

		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
