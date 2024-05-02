import { useEffect } from "react";
import { imageURL } from "../constants";
export const RestaurantCard = (props) => {

 console.log(props.info.id)

  return (
    <div className="card">

      <img className="restrauntphoto " alt="burger" src={imageURL + props.info.cloudinaryImageId} />
      <h2>{props.info.name}</h2>
      <h3>{props.info.cuisines}</h3>
      <h4>{props.info.avgRating}</h4>

    </div>
  )
}