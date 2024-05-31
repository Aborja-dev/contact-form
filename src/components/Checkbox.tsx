import React from 'react'

const CheckboxField: React.FC = ({label, error, changeHandler, value, className}) => {
  return (
    <>
    <fieldset className={className}>
        <input type="checkbox" id="agree" checked={value} onChange={() =>changeHandler(!value)} />
        <label htmlFor='agree'>{label}</label>
      </fieldset>
        <small style={{color: 'red'}}>{error}</small>
    </>
  )
}

export default CheckboxField
