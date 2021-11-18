import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteCartItem, addQuantity, decreaseQuantity} = value
      const {cartItemDetails} = props
      const {id, name, quantity, cost, imageUrl} = cartItemDetails
      const onDeleteCartItem = () => {
        deleteCartItem(id)
      }
      const onAddQuantity = () => {
        addQuantity(id)
      }
      const onDecreaseQuantity = () => {
        decreaseQuantity(id)
      }
      return (
        <li testid="cartItem" className="cart-item">
          <div testid="cartItem" className="cart-item-lg-view">
            <img className="cart-product-image" src={imageUrl} alt={name} />
            <h1 className="cart-product-lg-title">{name}</h1>
          </div>
          <div testid="cartItem" className="cart-item-details-container">
            <h1 className="cart-product-title">{name}</h1>
            <div testid="cartItem" className="cart-quantity-container">
              <button
                testid="decrement-quantity"
                onClick={onDecreaseQuantity}
                type="button"
                className="cart-item-controller-button"
              >
                <BsDashSquare color="#52606D" size={16} />
              </button>
              <p testid="item-quantity" className="cart-quantity">
                {quantity}
              </p>
              <button
                testid="increment-quantity"
                onClick={onAddQuantity}
                type="button"
                className="cart-item-controller-button"
              >
                <BsPlusSquare color="#52606D" size={16} />
              </button>
            </div>
            <div testid="cartItem" className="total-price-delete-container">
              <p className="cart-total-price">
                <FaRupeeSign /> {cost * quantity}.00
              </p>
            </div>
          </div>

          <div testid="cartItem" className="cart-quantity-lg-container">
            <button
              testid="decrement-quantity"
              onClick={onDecreaseQuantity}
              type="button"
              className="cart-item-controller-button"
            >
              <BsDashSquare color="#52606D" size={16} />
            </button>
            <p testid="item-quantity" className="cart-quantity">
              {quantity}
            </p>
            <button
              testid="increment-quantity"
              onClick={onAddQuantity}
              type="button"
              className="cart-item-controller-button"
            >
              <BsPlusSquare color="#52606D" size={16} />
            </button>
          </div>
          <div testid="cartItem" className="total-price-lg-delete-container">
            <p className="cart-total-price">
              <FaRupeeSign /> {cost * quantity}.00
            </p>
          </div>

          <button
            className="delete-button"
            type="button"
            onClick={onDeleteCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
