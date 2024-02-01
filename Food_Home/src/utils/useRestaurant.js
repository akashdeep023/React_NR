import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {
        getRestaurantMenu();
    }, [])
    const getRestaurantMenu = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=" + resId)
        const data = await fetch(FETCH_MENU_URL + resId)
        const json = await data.json()
        console.log(json)
        // setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        setRestaurant(json?.data)
    }
    return restaurant;
}

export default useRestaurant;