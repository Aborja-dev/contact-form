import React from 'react'
import { IRadioFieldGroup } from '../types/field.d'

const RadioFieldGroup: React.FC<IRadioFieldGroup & {className?: string}> = ({label, error, radios, className}) => {
  return (
    <>
     <fieldset className={`${className} ${error && 'error'}`}>
        <legend>{label}</legend>
        <div className='flex query'>

        </div>
          {
            radios.map((field, index) => (
              <div key={index} className={'radio-field'}>
                <input className={`${error && 'error'}`} type="radio" id={field.label} name="query" value={field.value} onChange={field.onChange} />
                <label htmlFor={field.label}>{field.label}</label>
              </div>
            ))
          }
      </fieldset>
          {error && <small className='error'>{error}</small>} 
    </>
  )
}

export default RadioFieldGroup
