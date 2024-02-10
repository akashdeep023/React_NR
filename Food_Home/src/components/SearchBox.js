import React, { useEffect, useState } from "react";
import useSearch from "../utils/useSearch";
import { FETCH_SEARCH_URL, IMG_SEARCH_URL } from "../constant";

function SearchBox() {
	const [search, setSearch] = useState("");
	const [searchData, setSearchData] = useState([]);
	// useEffect(() => {
	// 	getSearchData(search);
	// });
	const getSearchData = async function (search) {
		const data = await fetch(FETCH_SEARCH_URL + search);
		const json = await data.json();
		// console.log(json);
		setSearchData(json?.data?.suggestions || []);
	};
	return (
		<div className="body-box search-page">
			<div className="search-input">
				<input
					type="text"
					value={search}
					placeholder="Search for restaurants and food"
					onChange={(e) => {
						setSearch(e.target.value);
						getSearchData(search);
					}}
				/>
			</div>
			{console.log(searchData)}
			{searchData?.map((item, idx) => {
				return (
					<div className="search-list" key={"searchItem" + idx}>
						<img src={IMG_SEARCH_URL + item?.cloudinaryId} />
						<div>
							<p>{item?.text}</p>
							<p>{item?.tagToDisplay}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchBox;
