import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import Header from '../Header'
import './index.css'

const Profile = () => (
  <>
    <Header activeTab="PROFILE" />
    <div className="profile-section">
      <div className="profile-container">
        <CgProfile className="profile-icon" />
        <h1 className="profile-heading">
          Rahul Attuluri
          <br />
          (CEO Nxtwave)
        </h1>
        <div className="profile-info">
          <p className="profile-description">Mobile : +91 8*********</p>
          <p className="profile-description">Email : Rahul****01@gmail.com</p>
        </div>
        <Link to="/">
          <button className="profile-home-page-button" type="button">
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Profile
