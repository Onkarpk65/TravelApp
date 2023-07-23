import {GiModernCity} from 'react-icons/gi'

const ToSuggestionItem = props => {
  const {suggestionDetails, getCityToName} = props
  const {city} = suggestionDetails
  const onClickCityName = () => {
    getCityToName(city)
  }
  return (
    <li className="dropdown-item">
      <GiModernCity className="react-icon" />
      <p className="city-name" onClick={onClickCityName}>
        {city}
      </p>
    </li>
  )
}

export default ToSuggestionItem
