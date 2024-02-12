import { useEffect, useState } from "react";
import { FETCH_PRE_SEARCH_URL, FETCH_SEARCH_URL } from "../constant";

const useSearch = (query) => {
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
		getSearchData(query);
	}, [query]);
	const getSearchData = async function (query) {
		if (query?.trim() == "") {
			setSearchData([]);
			return;
		}
		const data = await fetch(FETCH_SEARCH_URL + query);
		const json = await data.json();
		setSearchData(json?.data?.suggestions || []);
	};
	return [searchData, searchPreData];
};

export default useSearch;
