import React from 'react'
const FIELD_STATUS = {
    ERROR: 'error',
    SUCCESS: 'success',
    DEFAULT: 'default',
    SUBMITTED: 'submitted'
}
interface RadiosFieldProps {
    className: string
    label: string
    onChange: (value: any) => void
    fields: {
        id: string
        name: string
        value: string | any
        label: string
        required?: boolean
    }[]
}

const RadiosField: React.FC<RadiosFieldProps> = ({ className, label, onChange, fields}) => {
    const [status, setStatus] = React.useState(FIELD_STATUS.DEFAULT)
    const [value, setValue] = React.useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    return (
        <fieldset className={className}>
            <legend>{label}</legend>
            <div className='flex query'>
                {
                    fields.map((field) => {
                        return (
                            <div className='radio-field'>
                                <input type="radio" id={field.id} name={field.name} required value={field.value} onChange={changeHandler}/>
                                <label htmlFor={field.id}>{field.label}</label>
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default RadiosField
