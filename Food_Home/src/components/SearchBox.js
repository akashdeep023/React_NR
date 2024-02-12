import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMG_PRE_SEARCH_URL, IMG_SEARCH_URL } from "../constant";
import useSearch from "../utils/useSearch";

function SearchBox() {
	const [search, setSearch] = useState("");
	const [searchData, searchPreData] = useSearch(search);
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
