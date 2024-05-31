import React from 'react'

const CheckboxField: React.FC = ({label, error, changeHandler, value, className}) => {
  return (
    <fieldset className={className}>
        <legend><span>{label}</span></legend>
        <input type="checkbox" id="agree" checked={value} onChange={changeHandler} />
        <label htmlFor="agree">{error}</label>
      </fieldset>
  )
}

export default CheckboxField
