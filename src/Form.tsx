import React from 'react'
import FieldText from './components/FieldText'
import { useField, useRadioField, useTextField } from './hook/useField'
import RadioFieldGroup from './components/RadioField'
import FieldTextArea from './components/TextArea'
import CheckboxField from './components/Checkbox'

const Form = () => {
  const fields = {
    nombre: useTextField('', [
      {
        message: 'El nombre no puede estar vacío',
        validate: value => value.length > 3
      }
    ]),
    apellido: useTextField('', [
      {
        message: 'El apellido no puede estar vacío',
        validate: value => value.length > 1
      }
    ]),
    email: useTextField('', [
      {
        message: 'El email no puede estar vacío',
        validate: value => value.includes('@')
      },
      {
        message: 'El email no es válido',
        validate: value => value.includes('.')
      }
    ]),
    consulta: useRadioField(0, [
      {
        message: 'Debes seleccionar un tipo de consulta',
        validate: value => value !== 0
      }
    ]),
    mensaje: useTextField('', [{
      message: 'El mensaje no puede estar vacío',
      validate: value => value.length > 0
    }]),
    agree: useField<boolean>(false, [{
      message: 'Debes aceptar los términos y condiciones',
      validate: value => value !== false
    }])
  }
  const {nombre, apellido, email, consulta, mensaje, agree } = fields
  const [submitted, setSubmitted] = React.useState(false)
  const isFilled = [
    nombre.value.length > 1,
    apellido.value.length > 1,
    email.value.length > 1,
    consulta.value !== 0,
    mensaje.value.length > 0,
    agree.value
  ].every(value => value)
  const allSuccess = Object.values(fields).every(field => field.error === null)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(agree.value);
    
    validateAll()
    if (isFilled && allSuccess) {
        console.log({ 
          nombre: nombre.value, 
          apellido: apellido.value, 
          email: email.value, 
          consulta: consulta.value, 
          mensaje: mensaje.value,
          agree: agree.value
        })
        setSubmitted(true)
        setTimeout(() => clearForm(), 3000)
    }
    else return
  }
  const clearForm = () => {
    Object.values(fields).forEach(field => field.clear())
    setSubmitted(false)
  }
  const validateAll = () => {
   nombre.validate(nombre.value)
   apellido.validate(apellido.value)
   email.validate(email.value)
   consulta.validate(consulta.value)
   mensaje.validate(mensaje.value)
   agree.validate(agree.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <FieldText label={'Nombre'} {...nombre} />
      <FieldText label={'Apellido'} {...apellido}/>
      <FieldText label={'Email'} {...email} />
      <RadioFieldGroup error={consulta.error} radios={[
        {
            id: 'enquiry',
            label: 'Enquiry',
            value: consulta.value,
            onChange: () => consulta.changeHandler(1)
        },
        {
            id: 'request',
            label: 'Request',
            value: consulta.value,
            onChange: () => consulta.changeHandler(2)
        }
      ]}/>
      <FieldTextArea label={'Message'} {...mensaje} />
      <CheckboxField label={'I agree with the terms and conditions'} {...agree} />
      <button type="submit" disabled={submitted}>Submit</button>
      <p>submitted: {submitted.toString()}</p>
    </form>
  )
}

export default Form

