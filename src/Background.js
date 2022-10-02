import React, { useContext } from 'react'
import { AppContext } from './context'

export const Background = () => {
  const { list } = useContext(AppContext)
  const current = list.current
  const main = current.weather[0].main
  const mad = current.weather[0]

  const getBackground = (mains) => {
    if (mains.icon === '01n') {
      return `${process.env.PUBLIC_URL}/images/ClearSky.mp4`
    }

    return `${process.env.PUBLIC_URL}/images/${main}.mp4`
  }

  return (
    <div className='video'>
      <div className='overlay'></div>
      <video
        autoPlay
        muted
        loop
        type='video/mp4'
        src={getBackground(mad)}
      ></video>
    </div>
  )
}
