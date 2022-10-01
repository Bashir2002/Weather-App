import React, { useContext } from 'react'
import { AppContext } from './context'

export const Background = () => {
  const { list } = useContext(AppContext)
  const current = list.current
  const main = current.weather[0].main

  return (
    <div className='video'>
      <div className='overlay'></div>
      <video
        autoPlay
        muted
        loop
        type='video/mp4'
        src={`${process.env.PUBLIC_URL}/images/${main}.mp4`}
      ></video>
    </div>
  )
}
