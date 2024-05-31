import React from 'react'
import { FormField } from '../types/field.d'

const FieldTextArea: React.FC<FormField> = ({label, error, changeHandler, value}) => {
  return (
    <div>
      <legend>{label}</legend>
      <textarea value={value} onInput={changeHandler}></textarea>
      {error && <small>{error}</small>}
    </div>
  )
}

export default FieldTextArea
