import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    const {resData}= props;
    const {name,cuisine,avgRating,costForTwo} = resData.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL +resData.data.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisine}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard