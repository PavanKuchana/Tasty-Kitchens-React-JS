import './index.css'
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

class FoodItem extends Component {
  state = {quantity: 0}

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem, addQuantity, decreaseQuantity} = value
          const {quantity} = this.state
          const {foodItemDetails} = this.props
          const {id, imageUrl, name, cost, rating} = foodItemDetails

          const onClickAddToCart = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addCartItem({...foodItemDetails, quantity: 1}),
            )
          }

          const onAddQuantity = () => {
            this.setState(prevState => ({
              quantity: prevState.quantity + 1,
            }))
            addQuantity(id)
          }

          const onDecreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decreaseQuantity(id)
          }

          return (
            <li testid="foodItem" className="food-item">
              <img src={imageUrl} alt="food-item" className="food-item-image" />
              <div>
                <h1 className="food-name">{name}</h1>
                <div className="food-cost-container">
                  <FaRupeeSign className="food-rupees-icon" />
                  <p className="food-cost">{cost}</p>
                </div>
                <div className="food-rating-container">
                  <ImStarFull className="star-icon" />
                  <p className="food-rating">{rating}</p>
                </div>

                {quantity === 0 ? (
                  <button
                    onClick={onClickAddToCart}
                    className="add-food-button"
                    type="button"
                  >
                    Add
                  </button>
                ) : (
                  <div className="food-quantity-container">
                    <button
                      testid="decrement-count"
                      onClick={onDecreaseQuantity}
                      type="button"
                      className="food-quantity-controller-button"
                    >
                      <BsDashSquare
                        className="food-quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                    <p testid="active-count" className="food-quantity">
                      {quantity}
                    </p>
                    <button
                      testid="increment-count"
                      onClick={onAddQuantity}
                      type="button"
                      className="food-quantity-controller-button"
                    >
                      <BsPlusSquare
                        className="food-quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default FoodItem
