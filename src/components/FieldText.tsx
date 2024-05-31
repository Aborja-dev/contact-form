import React from 'react'
import { FormField } from '../types/field.d'

const FieldText: React.FC<FormField> = ({label, error, changeHandler, value}) => {
  return (
    <div>
      <legend>{label}</legend>
      <input type="text" value={value} onChange={changeHandler} />
      {error && <small>{error}</small>}
    </div>
  )
}

export default FieldText
