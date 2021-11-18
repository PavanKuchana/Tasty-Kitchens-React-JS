import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dfzzwbmcq/image/upload/v1636535774/erroring_1_dd61rl.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="home-page-button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
