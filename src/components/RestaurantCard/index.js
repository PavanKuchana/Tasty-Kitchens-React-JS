import {Link} from 'react-router-dom'
import './index.css'
import {ImStarFull} from 'react-icons/im'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {id, name, imageUrl, cuisine, userRating, totalReviews} = restaurantData

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link-item">
      <li testid="restaurant-item" className="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div className="restaurant-info">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-cuisine">{cuisine}</p>
          <div className="restaurant-user-rating">
            <div className="restaurant-rating-container">
              <ImStarFull className="restaurant-star" />
              <h1 className="restaurant-rating">{userRating.rating}</h1>
            </div>
            <h1 className="restaurant-reviews">({totalReviews} rating) </h1>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantCard
