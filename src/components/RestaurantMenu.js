import { useParams } from "react-router-dom"
import { useEffect,useState  } from "react";
import { imageURL } from "../constants";

function RestaurantMenu() {
    const [res,setres]=useState([])
    const {id}=useParams();
    useEffect(()=>{
      console.log({id})
        RestaurantDetails();

    },[])

async function RestaurantDetails(){

     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.31973&lng=75.80146549999999&restaurantId="+id);
      const json= await data.json();
      setres(json?.data?.cards[2]?.card?.card?.info)
      console.log(json)
    }

  return (
    <div>
      <h1>Restaurant ID {id}</h1>
      <h1>{res.name}</h1>
      <h1>{res.city}</h1>

      <img src={imageURL+ res.cloudinaryImageId}/>
      <h3>{res.avgRating}star</h3>
      <h3>{res.costForTwoMessage}</h3>

    </div>
  )
}

export default RestaurantMenu
