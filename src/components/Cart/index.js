import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartTotal from '../CartTotal'
import './index.css'
import Footer from '../Footer'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      return (
        <>
          <Header activeTab="CART" />
          <div testid="cartItem" className="cart-container">
            <div testid="cartItem" className="cart-details-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div>
                  <div className="cart-headings-container">
                    <p className="cart-headings">Item</p>
                    <p className="cart-headings quantity">Quantity</p>
                    <p className="cart-headings price">Price</p>
                    <p className="cart-headings remove">Remove</p>
                  </div>
                  <CartListView />
                  <CartTotal />
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
