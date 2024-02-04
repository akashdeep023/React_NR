import React from "react";
import { useState } from "react";
import { findRestaurants } from "../utils/helper";

const Search = ({allRestaurants,setFilteredRestaurants,giveSearchText}) => {
    const [searchText, setSearchText] = useState("");

	return (
		<div className="my-3 flex justify-center gap-2">
			<input
				className="border rounded-md border-black p-1 max-w-56"
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
                    giveSearchText(e.target.value);
				}}
			/>
			<button
				className="border rounded-md border-black bg-blue-800 text-white px-2 max-w-56 hover:bg-purple-600 hover:text-black"
				onClick={() => {
					const data = findRestaurants(searchText, allRestaurants);
					setFilteredRestaurants(data);
					setSearchText("");
				}}
			>
				Search
            </button>
		</div>
	);
};

export default Search;
