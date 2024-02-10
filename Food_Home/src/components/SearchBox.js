import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	FETCH_PRE_SEARCH_URL,
	FETCH_SEARCH_URL,
	IMG_PRE_SEARCH_URL,
	IMG_SEARCH_URL,
} from "../constant";

function SearchBox() {
	const [search, setSearch] = useState("");
	const [searchPreData, setSearchPreData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	useEffect(() => {
		getPreSearch();
	}, []);
	const getPreSearch = async function () {
		const data = await fetch(FETCH_PRE_SEARCH_URL);
		const json = await data.json();
		setSearchPreData(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
		);
	};
	useEffect(() => {
		getSearchData(search);
	}, [search]);
	const getSearchData = async function (search) {
		if (search?.trim() == "") {
			setSearchData([]);
			return;
		}
		const data = await fetch(FETCH_SEARCH_URL + search);
		const json = await data.json();
		// console.log(json);
		setSearchData(json?.data?.suggestions || []);
	};
	console.log(searchData);
	return (
		<div className="body-box search-page">
			<div className="search-input">
				<input
					type="search"
					value={search}
					placeholder="Search for restaurants and food"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			{searchData?.length > 0 ? (
				searchData?.map((item, idx) => {
					return item?.tagToDisplay == "Restaurant" ? (
						<div className="search-list" key={"searchItem" + idx}>
							<Link
								to={
									"/restaurant/" +
									item?.metadata
										?.split('"primaryRestaurantId":')[1]
										?.split(",")[0]
								}
							>
								<img
									src={IMG_SEARCH_URL + item?.cloudinaryId}
								/>
								<div>
									<p>{item?.text}</p>
									<p>{item?.tagToDisplay}</p>
								</div>
							</Link>
						</div>
					) : null;
				})
			) : (
				<div className="search-pre-list">
					{searchPreData?.map((item, idx) => {
						return (
							<div
								className="search-pre-item"
								key={"searchPreList" + idx}
							>
								<img
									src={IMG_PRE_SEARCH_URL + item?.imageId}
									onClick={() =>
										setSearch(
											item?.entityId
												?.split("=")[1]
												?.split("%20")
												?.join(" ")
										)
									}
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBox;
