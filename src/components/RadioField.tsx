import React from 'react'
import { IRadioFieldGroup } from '../types/field.d'

const RadioFieldGroup: React.FC<IRadioFieldGroup> = ({error, radios}) => {
  return (
    <>
     <fieldset>
        <legend>Query type</legend>
          {
            radios.map((field, index) => (
              <div key={index}>
                <input type="radio" id={field.label} name="query" value={field.value} onChange={field.onChange} />
                <label htmlFor={field.label}>{field.label}</label>
              </div>
            ))
          }
      </fieldset>
          {error && <small>{error}</small>} 
    </>
  )
}

export default RadioFieldGroup
