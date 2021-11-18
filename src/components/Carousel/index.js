import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

class Carousel extends Component {
  state = {
    carouselList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getCarouselData()
  }

  getCarouselData = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const carouselApiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(carouselApiUrl, options)
    const data = await response.json()
    const carouselData = data.offers.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
    }))
    this.setState({
      carouselList: carouselData,
      isLoading: false,
    })
  }

  renderCarouselList = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    }
    const {carouselList} = this.state
    return (
      <ul className="carousel-container">
        <Slider {...settings}>
          {carouselList.map(eachImage => (
            <li key={eachImage.id}>
              <img
                src={eachImage.imageUrl}
                alt="offer"
                className="carousel-image"
              />
            </li>
          ))}
        </Slider>
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="restaurants-offers-loader" className="carousel-loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderCarouselList()
  }
}

export default Carousel
