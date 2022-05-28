import React from 'react'
import styledComponents from 'styled-components'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
    "13d": "/icons/snow.svg",
    "13n": "/icons/snow.svg",
    "50d": "/icons/wind.svg",
    "50n": "/icons/wind.svg",
};

const WeatherCondition = styledComponents.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styledComponents.span`
  margin-right: 100px;
  font-size: 16px;
  & span{
      font-size: 28px;
  }
`;

const WeatherLogo = styledComponents.img`
  width: 140px;
  height: 160px;
  margin: 5px auto;
`;

const Location = styledComponents.span`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  margin-left: 100px;
`;

const WeatherInfo = styledComponents.span`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 10px;
`;

const WeatherInfoContainer = styledComponents.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styledComponents.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoIcon = styledComponents.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styledComponents.span`
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
                {props.value}
                <span>{props.name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherComponent = (props) => {

  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
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