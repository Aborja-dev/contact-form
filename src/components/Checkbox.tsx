import React from 'react'
interface Props {
  label: string
  error: string | null
  changeHandler: (e: boolean) => void
  value: boolean
  className?: string
}
const CheckboxField: React.FC<Props> = ({label, error, changeHandler, value, className}) => {
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
