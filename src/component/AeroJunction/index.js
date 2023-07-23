import {Component} from 'react'
import {RiArrowLeftRightFill, RiArrowUpDownLine} from 'react-icons/ri'
import Header from '../Header'
import Banner from '../Banner'
import FromSuggestionItem from '../FromSuggestionItem'
import ToSuggestionItem from '../ToSuggestionItem'
import Footer from '../Footer'

import './index.css'

class AeroJunction extends Component {
  state = {
    airData: [],
    fromInput: '',
    toInput: '',
    isClickedFrom: true,
    isClickedTo: true,
  }

  componentDidMount() {
    this.getAirApi()
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fromInput, toInput} = this.state
  }

  getCityFromName = city => {
    const {isClickedFrom} = this.state

    this.setState({
      fromInput: city,
      isClickedFrom: !isClickedFrom,
    })
  }

  getCityToName = city => {
    const {isClickedTo} = this.state
    this.setState({
      toInput: city,
      isClickedTo: !isClickedTo,
    })
  }

  getFromSearchResults = () => {
    const {airData, fromInput} = this.state
    const filterCities = airData.filter(eachData =>
      eachData.city.toLowerCase().includes(fromInput.toLowerCase()),
    )
    return filterCities
  }

  getToSearchResults = () => {
    const {airData, toInput} = this.state
    const filterCities = airData.filter(eachData =>
      eachData.city.toLowerCase().includes(toInput.toLowerCase()),
    )
    return filterCities
  }

  checkFromInput = () => {
    const {fromInput} = this.state
    if (fromInput === '') {
      this.setState({
        isClickedFrom: true,
      })
    }
  }

  checkToInput = () => {
    const {toInput} = this.state
    if (toInput === '') {
      this.setState({
        isClickedTo: true,
      })
    }
  }

  onChangeFrom = event => {
    this.setState({
      fromInput: event.target.value,
    })

    this.checkFromInput()
  }

  onChangeToInput = event => {
    this.setState({
      toInput: event.target.value,
    })
    this.checkToInput()
  }

  getAirApi = async () => {
    const url =
      'https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const fetchedApiData = data.map(eachData => ({
      city: eachData.city,
      code: eachData.code,
      country: eachData.country,
      name: eachData.name,
      state: eachData.state,
      woeid: eachData.woeid,
      directFlights: eachData.direct_flights,
      icao: eachData.icao,
    }))
    this.setState({
      airData: fetchedApiData,
    })
  }

  renderFromSearchResults = () => {
    const {isClickedFrom} = this.state
    const searchResults = this.getFromSearchResults()
    return (
      <>
        {isClickedFrom ? (
          <ul className="dropdown-container">
            {searchResults.map(eachSuggestion => (
              <FromSuggestionItem
                key={eachSuggestion.code}
                suggestionDetails={eachSuggestion}
                getCityFromName={this.getCityFromName}
              />
            ))}
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }

  renderToSearchResults = () => {
    const {isClickedTo} = this.state
    const searchResults = this.getToSearchResults()
    return (
      <>
        {isClickedTo ? (
          <ul className="dropdown-container">
            {searchResults.map(eachSuggestion => (
              <ToSuggestionItem
                key={eachSuggestion.code}
                suggestionDetails={eachSuggestion}
                getCityToName={this.getCityToName}
              />
            ))}
          </ul>
        ) : (
          ''
        )}
      </>
    )
  }

  render() {
    const {fromInput, toInput, airData} = this.state
    console.log(airData)
    return (
      <>
        <Header />
        <div className="app-bg">
          <Banner />
          <form className="form" onSubmit={this.onSubmitForm}>
            <div className="from-to-container">
              <div className="x">
                <div className="input-container">
                  <label className="label" htmlFor="From">
                    From
                  </label>
                  <input
                    type="search"
                    placeholder="From - Start Tying Your Pickup Location"
                    className="input"
                    id="From"
                    onChange={this.onChangeFrom}
                    value={fromInput}
                  />
                </div>
                {fromInput.length > 0 ? this.renderFromSearchResults() : ''}
                <div className="date-and-time-container">
                  <input type="date" className="input date-input" />
                  <input type="time" className="input time-input" />
                </div>
              </div>
              <RiArrowLeftRightFill className="bs-icon" />
              <RiArrowUpDownLine className="up-down-bs-icon" />
              <div className="x">
                <div className="input-container">
                  <label className="label" htmlFor="To">
                    To
                  </label>
                  <input
                    type="search"
                    placeholder="To - Start Tying Your Drop Off Location"
                    className="input"
                    id="To"
                    onChange={this.onChangeToInput}
                  />
                </div>
                {toInput.length > 0 ? this.renderToSearchResults() : ''}
                <div className="date-and-time-container">
                  <input type="date" className="input date-input" />
                  <input type="time" className="input time-input" />
                </div>
              </div>
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <Footer />
      </>
    )
  }
}

export default AeroJunction
