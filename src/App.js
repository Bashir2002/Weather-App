import React, { useContext, useState } from 'react'
import { Background } from './Background'
import { GiSunset, GiSunrise } from 'react-icons/gi'
import { FaTemperatureHigh, FaCloudRain } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { BsSpeedometer } from 'react-icons/bs'
import './App.css'
import { Input } from './input'
import { AppContext } from './context'

function App() {
  const { showAlert, list, alert, loading, people } = useContext(AppContext)
  const [currentTime, setCurrentTime] = useState()
  const now = new Date()
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  }
  const locale = navigator.language
  const city = new Intl.DateTimeFormat(locale, options).format(now)
  const formatdate = (name, name2) => {
    const new3 = name + name2
    const now2 = new Date(new3 * 1000)
    const options2 = {
      hour: 'numeric',
      minute: 'numeric',
    }
    const city2 = new Intl.DateTimeFormat(locale, options2).format(now2)
    return city2
  }
  setInterval(() => {
    const currentTime = new Date()
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    }
    const locale = navigator.language
    const city4 = new Intl.DateTimeFormat(locale, options).format(currentTime)
    setCurrentTime(city4)
  }, 1000)
  if (loading) {
    return <div className='spinner'></div>
  }
  const current = list.current
  const main = current.dt
  const imgUrl = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`

  const getUrl = (max) => {
    return `http://openweathermap.org/img/wn/${list.hourly[max].weather[0].icon}@2x.png`
  }
  const getTemp = (max) => {
    const temp = Math.round(list.hourly[max].temp)
    return temp
  }
  return (
    <main className='App'>
      <Background />
      <Input />
      <section className='info'>
        <div className='date'>
          <div className='name'>
            <h1>
              {people.name},{people.country}
            </h1>
            <h4>{city}</h4>
          </div>
          <h2>{currentTime}</h2>
        </div>
        <div className='current'>
          <div className='numb'>
            <img src={imgUrl} alt='' className='imgUrl' />
            <div className='temp'>
              <h1>
                {Math.round(current.temp)}
                <sup>o</sup>C
              </h1>
              <h4>{current.weather[0].description}</h4>
            </div>
          </div>
          <div className='mad'>
            <div className='mad-content1'>
              <div className='sun'>
                <GiSunset className='set' />
                <p>
                  Sunrise : {formatdate(current.sunrise, list.timezone_offset)}
                </p>
              </div>
              <div className='sun'>
                <GiSunrise className='set' />
                <p>
                  Sunset : {formatdate(current.sunset, list.timezone_offset)}
                </p>
              </div>
            </div>
            <div className='mad-content2'>
              <div className='maddd'>
                <div className='sunn'>
                  <FaTemperatureHigh className='' />
                  <p>
                    Feel like : {Math.round(current.feels_like)}
                    <sup>o</sup>C
                  </p>
                </div>
                <div className='sunn'>
                  <WiHumidity className='' />
                  <p>Humidity : {Math.round(current.humidity)}% </p>
                </div>
                <div className='sunn'>
                  <FaCloudRain className='' />
                  <p>Chance of rain : {Math.round(current.feels_like)}% </p>
                </div>
              </div>
              <div className='maddd'>
                <div className='sunn'>
                  <FaTemperatureHigh className='' />
                  <p>
                    pressure : {Math.round(current.pressure)}
                    hPa{' '}
                  </p>
                </div>
                <div className='sunn'>
                  <BsSpeedometer className='' />
                  <p>wind speed : {current.wind_speed}m/s</p>
                </div>
                <div className='sunn'>
                  <FaTemperatureHigh className='' />
                  <p>uv index : {Math.round(current.uvi)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='mad2'>
        <div className='hour'>
          <p>Now</p>
          <img src={getUrl(0)} alt='' />
          <p>
            {getTemp(0)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[2].dt, list.timezone_offset)}</p>
          <img src={getUrl(2)} alt='' />
          <p>
            {getTemp(2)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[5].dt, list.timezone_offset)}</p>
          <img src={getUrl(5)} alt='' />
          <p>
            {getTemp(5)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[8].dt, list.timezone_offset)}</p>
          <img src={getUrl(8)} alt='' />
          <p>
            {getTemp(8)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[11].dt, list.timezone_offset)}</p>
          <img src={getUrl(11)} alt='' />
          <p>
            {getTemp(11)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[14].dt, list.timezone_offset)}</p>
          <img src={getUrl(14)} alt='' />
          <p>
            {getTemp(14)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[17].dt, list.timezone_offset)}</p>
          <img src={getUrl(17)} alt='' />
          <p>
            {getTemp(17)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[20].dt, list.timezone_offset)}</p>
          <img src={getUrl(20)} alt='' />
          <p>
            {getTemp(20)}
            <sup>o</sup>C
          </p>
        </div>
        <div className='hour'>
          <p>{formatdate(list.hourly[23].dt, list.timezone_offset)}</p>
          <img src={getUrl(23)} alt='' />
          <p>
            {getTemp(23)}
            <sup>o</sup>C
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
