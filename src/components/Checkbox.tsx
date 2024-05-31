import React from 'react'

const CheckboxField = ({label, error, changeHandler, value}) => {
  return (
    <div>
        <legend><span>{label}</span></legend>
        <input type="checkbox" id="agree" checked={value} onChange={changeHandler} />
        <label htmlFor="agree">{error}</label>
      </div>
  )
}

export default CheckboxField
