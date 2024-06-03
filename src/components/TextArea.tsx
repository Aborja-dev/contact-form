import React from 'react'

interface Props {
  label: string
  error: string | null
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  className: string
}

const FieldTextArea: React.FC<Props> = ({label, error, changeHandler, value, className}) => {
  return (
    <fieldset className={`${className} ${error && 'error'}`}>
      <label htmlFor={label}>{label}</label>
      <textarea value={value} id={label} onInput={changeHandler}></textarea>
      {error && <small>{error}</small>}
    </fieldset>
  )
}

export default FieldTextArea
