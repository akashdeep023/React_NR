import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import { IMG_URL } from "../constant";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {
        getRestaurantMenu();
    }, [])
    const getRestaurantMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=" + id)
        const json = await data.json()
        console.log(json)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }
    return (!restaurant ? <Shimmer/> :
        <div>
            <h1>Restaurant Menu</h1>
            <h2>{restaurant?.name}</h2>
            <img src={ IMG_URL + restaurant?.cloudinaryImageId} />
            <h2>{ restaurant?.costForTwoMessage }</h2>
            <h2>{ restaurant?.avgRating + " stars" }</h2>
            <h2>{ restaurant?.cuisines.join(", ") }</h2>
            <h2>{ restaurant?.name }</h2>
        </div>
    )
}
export default RestaurantMenu;