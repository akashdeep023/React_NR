import { useState, useEffect } from "react";
import { FETCH_INFO_URL } from "../constant";

const useCollections = (resId) => {
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getCollection();
	}, []);
	const getCollection = async () => {
		const data = await fetch(FETCH_INFO_URL + resId);
		const json = await data.json();
		// console.log(json);
		const restInfo = json?.data?.cards;
		setRestaurant(restInfo);
	};
	return restaurant;
};

export default useCollections;
