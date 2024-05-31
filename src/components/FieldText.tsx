import React from 'react'
import { FormField } from '../types/field.d'

const FieldText: React.FC<FormField & {className?: string}> = ({label, error, changeHandler, value, className}) => {
  return (
    <fieldset className={`${className} ${error && 'error'}`}>
      <legend>{label}</legend>
      <input type="text" value={value} onChange={changeHandler} />
      {error && <small>{error}</small>}
    </fieldset>
  )
}

export default FieldText
