import React from 'react'
import { FormField } from '../types/field.d'

const FieldTextArea: React.FC<FormField & {className?: string}> = ({label, error, changeHandler, value, className}) => {
  return (
    <fieldset className={className}>
      <legend>{label}</legend>
      <textarea value={value} onInput={changeHandler}></textarea>
      {error && <small>{error}</small>}
    </fieldset>
  )
}

export default FieldTextArea
