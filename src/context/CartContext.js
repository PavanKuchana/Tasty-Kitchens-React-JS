import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addQuantity: () => {},
  decreaseQuantity: () => {},
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
