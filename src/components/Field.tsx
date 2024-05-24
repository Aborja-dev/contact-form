import React, { useEffect } from 'react'
import { FieldStatus } from '../types/types'
import { FIELD_STATUS } from '../types/constants'


interface FieldProps {
    className: string
    label: string
    onChange: (value: any) => void
    error: string | null,
    submitted: boolean
}
const Field: React.FC< FieldProps> = ({ className, label, onChange, error, submitted}) => {
    const [status, setStatus] = React.useState<FieldStatus>(FIELD_STATUS.DEFAULT)
    const [value, setValue] = React.useState('')

    
    useEffect (() => {
        console.log('useEffect', error, submitted);
        if (error !== null) {
            setStatus(FIELD_STATUS.ERROR)
            clearField()
        }
        if (error !== null) setStatus(FIELD_STATUS.ERROR)
        if (error === null && submitted)  {
            setStatus(FIELD_STATUS.SUBMITTED)
            clearField()
        }
        
    }, [error, submitted])
    const clearField = () => {
        setValue('')
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(FIELD_STATUS.DEFAULT)
        setValue(e.target.value)
        onChange(e.target.value)
    }
    
    const input : {
        type: string,
        required?: boolean,
        placeholder?: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        value: string

    } = {
        type: 'text',
        placeholder: 'First Name',
        onChange: changeHandler,
        value

    }
    
  return (
    <fieldset className={`${className} ${status === FIELD_STATUS.ERROR ? 'error' : '' }`}>
        <legend>{label}</legend>
        <input {...input} />
        {status === FIELD_STATUS.ERROR && <small>{error}</small>}
        <p>{status}  {submitted.toString()}</p>
    </fieldset>
  )
}

export default Field
