import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Payment = () => (
  <>
    <Header activeTab="CART" />
    <div className="payment-section">
      <div className="payment-container">
        <img
          src="https://res.cloudinary.com/dfzzwbmcq/image/upload/v1636535888/check-circle.1_1_rrrwou.png"
          alt="success"
        />
        <h1 className="payment-heading">Payment Successful</h1>
        <p className="payment-description">
          Thank you for ordering Your payment is successfully completed.
        </p>

        <Link to="/">
          <button className="payment-home-page-button" type="button">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Payment
