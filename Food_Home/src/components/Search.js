import React from "react";
import { useState } from "react";
import { findRestaurants } from "../utils/helper";

const Search = ({ allRestaurants, setFilteredRestaurants }) => {
	const [searchText, setSearchText] = useState("");

	return (
		<div id="search-container">
			<input
				type="text"
				placeholder="Search Restaurant"
				value={searchText}
				onChange={(e) => {
					// console.log(e.target.value);
					setSearchText(e.target.value);
					const data = findRestaurants(
						e.target.value,
						allRestaurants
					);
					setFilteredRestaurants(data);
				}}
			/>
			{/* <button
				onClick={() => {
					const data = findRestaurants(searchText, allRestaurants);
					setFilteredRestaurants(data);
					setSearchText("");
				}}
			>
				Search
            </button> */}
		</div>
	);
};

export default Search;
