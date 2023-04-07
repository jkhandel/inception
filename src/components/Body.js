import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";
const Body = (props) => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.data.avgRating > 4;
          });
          setListOfRestaurants(filteredList);
        }}
      >
        Top rated restro
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
