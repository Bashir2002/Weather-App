import React, { useState, useContext, useEffect } from 'react'
const AppContext = React.createContext()
const key = '61ccb421e620bd59488b01d17a491011'
// var geocoder = new google.maps.Geocoder()

const AppProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [units, setUnits] = useState('metric')
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  // function codeAddress() {
  //   geocoder.geocode({ address: name }, function (results, status) {
  //     if (status == 'OK') {
  //       console.log(results)
  // map.setCenter(results[0].geometry.location)
  // var marker = new google.maps.Marker({
  //   map: map,
  //   position: results[0].geometry.location,
  // })
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status)
  //     }
  //   })
  // }

  const fetchLoc = async (lat, long) => {
    setLoading(true)
    const data = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}`
    )
    const res = await data.json()
    setList(res)
    setLoading(false)
  }
  const fetchData = async (lat, lon) => {
    const data = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${key}`
    )
    const res = await data.json()
    setPeople(res[0])
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        fetchData(lat, long)
        fetchLoc(lat, long)
      },
      () => {}
    )
  }, [])
  // return `${this.baseUrl}/geo/1.0/direct?q=${city}&appid=${this.appId}`;

  const fetchCords = async () => {
    const data = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${key}`
    )
    const res = await data.json()
    // console.log(data)
    // console.log(res)
    if (res.length === 0) {
      setLoading(false)
      showAlert(true, 'danger', 'Error : city not found')
      return
    }
    setPeople(res[0])
    const { lat, lon } = res[0]
    await fetchLoc(lat, lon)
    // await fetchData(lat, lon)
    setLoading(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'input is required')
    } else {
      setName('')
      fetchCords()
    }
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  return (
    <AppContext.Provider
      value={{
        alert,
        name,
        people,
        list,
        loading,
        setName,
        showAlert,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }
