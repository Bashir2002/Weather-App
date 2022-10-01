import React, { useContext } from 'react'
import { AppContext } from './context'
import Alert from './Alert'

export const Input = () => {
  const { alert, handleSubmit, name, setName } = useContext(AppContext)

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            name=''
            id=''
            className='grocery'
            placeholder='e.g. ilorin'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            search
          </button>
        </div>
        {alert.show && <Alert />}
      </form>
    </section>
  )
}
