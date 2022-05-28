import React from 'react'
import styledComponents from 'styled-components'

const WeatherLogo = styledComponents.img`
  width: 160px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styledComponents.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styledComponents.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  margin: 10px auto;

  & input{
      padding: 10px;
      font-size: 14px;
      border: none;
      outline: none;
  }

  & button{
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    cursor: pointer;    
  }
`;

const CityComponent = (props) => {
  const {setCity, fetchWeather} = props;
  return (
    <div>
        <WeatherLogo src='/react-weather-app/icons/perfect-day.svg' />
        <br/>
        <ChooseCityLabel>Choose City:</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input 
             placeholder='City'
             onChange={(e)=>setCity(e.target.value)}
            />
            <button type='submit'>Search</button>
        </SearchBox>
    </div>
  )
}

export default CityComponent