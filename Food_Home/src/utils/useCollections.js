import { useState, useEffect } from "react";
import { FETCH_INFO_URL } from "../constant";

const useCollections = (resId) => {
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getCollection();
	}, []);
	const getCollection = async () => {
		try {
			const data = await fetch(FETCH_INFO_URL + resId);
			const json = await data.json();
			// console.log(json);
			const restInfo = json?.data?.cards;
			setRestaurant(restInfo);
		} catch (err) {
			console.log(err);
			setRestaurant(null);
		}
	};
	return restaurant;
};

export default useCollections;
