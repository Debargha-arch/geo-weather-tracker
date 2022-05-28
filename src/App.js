import axios from 'axios';
import { useState } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

const API_KEY = 'a8688f952698bd5ed7ee9e23b1354a83';

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 2px auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 40px 10px;
  border-radius: 4px;
  width: 540px;
  height: 80%;
  color: white;
  background-image: url("/geo-weather-tracker/locicon/turbine.jpg");
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 2px #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 350px;
  & img {
    display: inline;
    width: 50px;
    height: 50px;
    margin-top: 0px;
  }
  & span {
    display: inline;
    color: black;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Helvetica Neue';
    margin: 5px 0px 0px 15px;
  }
`;

const GeoLabel = styled.span`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const Footer = styled.footer`
  text-align: center;
  background-color: brown;
  color: white;
  width: 100%;
  margin-bottom: 0px;
  padding: 12px;
`;

function App() {
 
  //Current Location
  const [currWeather, setCurrWeather] = useState();

  //Search City
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  window.addEventListener("load", () => {
    let long,lat;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( async (position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
        setCurrWeather(resp.data);
        console.log(resp.data);
      })
    }
  })

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    setWeather(response.data);
    };

  return (
    <>
    <Header>
    <img src="/geo-weather-tracker/icons/Klara-1.png" alt='logo'/>
    <span>GEO WEATHER TRACKER</span>
    </Header>
    <Grid container spacing={15}>
    <Grid item md={6}>
    <Container1>
      <GeoLabel>Your Location</GeoLabel>
      <WeatherComponent weather={currWeather} />
    </Container1>
    </Grid>
    <Grid item md={4}>
    <Container2>
    <CityComponent setCity={setCity} fetchWeather={fetchWeather}/>
      { weather ? (
      <WeatherComponent weather={weather} />
      ): ( <></>
      )}
    </Container2>
    </Grid>
    <Footer>&copy; 2022 DEBARGHA MUKHERJEE . All Rights Reserved</Footer>
    </Grid>
    </>
  );
}

export default App;
