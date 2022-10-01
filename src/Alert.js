import React, { useEffect, useContext } from 'react'
import { AppContext } from './context'

const Alert = () => {
  const { showAlert, list, alert } = useContext(AppContext)
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert
