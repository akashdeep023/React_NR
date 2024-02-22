import { useContext, useEffect, useState } from "react";
import LocationContext from "./LocationContext";
import { FETCH_SEARCH_URL } from "../constant";

const UseAgainRestaurants = () => {
	const [resData, setRestData] = useState(null);
	const { location } = useContext(LocationContext);
	useEffect(() => {
		getRestData();
	}, []);
	const restCollection = [
		"biryani",
		"pizza",
		"rolls",
		"burger",
		"tea",
		"chinese",
		"cake",
		"dessert",
		"north indian",
		"south indian",
		"sandwich",
		"ice cream",
	];
	const query = `${restCollection[Math.floor(Math.random() * 13)]}`;
	const getRestData = async function () {
		const data = await fetch(
			FETCH_SEARCH_URL +
				"&lat=" +
				location.latitude +
				"&lng=" +
				location.longitude +
				"&str=" +
				query
		);
		const json = await data.json();
		const selectedData = json?.data?.suggestions?.filter(
			(resData) => resData?.type == "RESTAURANT"
		);
		setRestData(selectedData);
	};
	console.log(resData);
	return resData;
};
export default UseAgainRestaurants;
