import React from 'react'
const FIELD_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success',
  DEFAULT: 'default',
  SUBMITTED: 'submitted'
}
interface FieldProps {
  className: string
  label: string
  onChange: (value: any) => void
}
const Checkbox: React.FC<FieldProps> = ({ className, label, onChange }) => {
  const [status, setStatus] = React.useState(FIELD_STATUS.DEFAULT)
  const [value, setValue] = React.useState(false)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(!value)
    setStatus(FIELD_STATUS.SUCCESS)
    onChange(!value)
  }

  return (
    <fieldset className={className}>
      <input type="checkbox" id="agree" onChange={changeHandler} />
      <label htmlFor='agree'>{label}</label>
    </fieldset>
  )
}

export default Checkbox