import React from 'react'
import styled from 'styled-components'

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  margin: auto;

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
        <SearchBox onSubmit={fetchWeather}>
            <input 
             placeholder='Find City'
             onChange={(e)=>setCity(e.target.value)}
            />
            <button type='submit'>Search</button>
        </SearchBox>
    </div>
  )
}

export default CityComponent
