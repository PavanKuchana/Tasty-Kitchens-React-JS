import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const stringifiedCartList = localStorage.getItem('cartData')
      const parsedCartList = JSON.parse(stringifiedCartList)
      return (
        <ul className="cart-list-container">
          {parsedCartList.map(eachCartItem => (
            <CartItem
              key={eachCartItem.id}
              cartItemDetails={eachCartItem}
              value={value}
            />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
