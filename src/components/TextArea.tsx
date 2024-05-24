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
const Textarea: React.FC< FieldProps> = ({ className, label, onChange}) => {
    const [status, setStatus] = React.useState(FIELD_STATUS.DEFAULT)
    const [value, setValue] = React.useState('')
    const changeHandler = (e) => {
        setValue(e.target.value)
        setStatus(FIELD_STATUS.SUCCESS)
        onChange(e.target.value)
    }
    
  return (
    <fieldset className={`${className} ${status === FIELD_STATUS.ERROR && 'error'}`}>
        <legend>{label}</legend>
        <textarea value={value} onChange={changeHandler} />
    </fieldset>
  )
}

export default Textarea

