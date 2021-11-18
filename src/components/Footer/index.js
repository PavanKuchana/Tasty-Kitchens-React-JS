import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-heading-container">
        <img
          src="https://res.cloudinary.com/dfzzwbmcq/image/upload/v1636535540/Frame_275_ag4lyc.png"
          className="footer-image"
          alt="website-footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="footer-icons-container">
        <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer">
          <FaPinterestSquare
            testid="pintrest-social-icon"
            className="footer-icon"
          />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram testid="instagram-social-icon" className="footer-icon" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter testid="twitter-social-icon" className="footer-icon" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookSquare
            testid="facebook-social-icon"
            className="footer-icon"
          />
        </a>
      </div>
    </div>
  )
}
