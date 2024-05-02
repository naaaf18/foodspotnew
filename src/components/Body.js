import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [originalRestroList, setOriginalRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);

  useEffect(() => {
    // console.log('hello')
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setOriginalRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestroList(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleSearch = () => {
    const filteredData = originalRestroList.filter(res =>
      res.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredRestroList(filteredData);
  };
   //if(filteredRestroList.length===0) return <h1>There are no restaurant that match your filter</h1>;
  return (originalRestroList.length===0)?( <Shimmer/> ): (
    <div>
      <div className="searchcontainer">
        <input
          type="text"
          className="searchinput"
          placeholder="Search for restaurant"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="searchbtn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="Restaurantlist">
        {filteredRestroList.map((res) => (
         <Link to={"restaurant/"+res.data.id}  key={res.data.id} ><RestaurantCard {...res}/></Link> 
        ))}
      </div>
    </div>
  )
}
export default Body;