import React from 'react'
import styled from 'styled-components'

export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};

export const unit = {
  sunset: " IST",
  sunrise: " IST",
  humidity: "%",
  wind: " m/s",
  pressure: " mbar",
};

export const WeatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
    "13d": "/react-weather-app/icons/snow.svg",
    "13n": "/react-weather-app/icons/snow.svg",
    "50d": "/react-weather-app/icons/wt-3.svg",
    "50n": "/react-weather-app/icons/wt-14.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0px auto;
`;

const Condition = styled.span`
  margin-right: 100px;
  font-size: 16px;
  & span{
      font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 140px;
  height: 160px;
  margin: 5px auto;
`;

const Location = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  margin-left: 100px;
`;

const WeatherInfo = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 10px;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[props.name]}/>
            <InfoLabel>
                {props.value}{unit[props.name]}
                <span>{props.name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = (props) => {

  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(timeStamp * 1000).getMinutes()}`
  }

  return (
    <div>
        <WeatherCondition>
            <Condition>
                <span>{`${Math.floor(weather?.main?.temp-273)}°C`} |</span>
                {` ${weather?.weather[0].description}`}
            </Condition>            
            <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfo>Weather Information</WeatherInfo>
        <WeatherInfoContainer>
            <WeatherInfoComponent
             name={isDay ? "sunset" : "sunrise"} 
             value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
             />
            <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
            <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
            <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}/>
        </WeatherInfoContainer>
    </div>
  )
}

export default WeatherComponent