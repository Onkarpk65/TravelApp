import {GiModernCity} from 'react-icons/gi'

const FromSuggestionItem = props => {
  const {suggestionDetails, getCityFromName} = props
  const {city} = suggestionDetails
  const onClickCity = () => {
    getCityFromName(city)
  }
  return (
    <li className="dropdown-item">
      <GiModernCity className="react-icon" />
      <p className="city-name" onClick={onClickCity}>
        {city}
      </p>
    </li>
  )
}

export default FromSuggestionItem
