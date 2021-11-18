import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://res.cloudinary.com/dfzzwbmcq/image/upload/v1636535360/Layer_2_p1ec26.png"
      className="cart-empty-image"
      alt="empty cart"
    />
    <h1 className="cart-empty-heading">No Order Yet!</h1>
    <p className="cart-empty-description">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-now-button">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
