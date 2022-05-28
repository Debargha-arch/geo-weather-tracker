import axios from 'axios';
import { useState } from 'react';
import styledComponents from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

const API_KEY = 'a8688f952698bd5ed7ee9e23b1354a83';

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
`;

const AppLabel = styledComponents.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;


function App() {

  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    setWeather(response.data);
    };

  return (
    <>
    <Container>
      <AppLabel>GEO WEATHER TRACKER</AppLabel>
      { weather ? (
      <WeatherComponent weather={weather} />
      ): (<CityComponent setCity={setCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
    <footer>2022 &copy; DEBARGHA MUKHERJEE</footer>
    </>
  );
}

export default App;
