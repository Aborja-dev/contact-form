import React from 'react'
import FieldText from './components/FieldText'
import { useField, useRadioField, useTextAreaField, useTextField } from './hook/useField'
import RadioFieldGroup from './components/RadioField'
import FieldTextArea from './components/TextArea'
import CheckboxField from './components/Checkbox'
import { toast, Bounce } from 'react-toastify'

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
    mensaje: useTextAreaField('', [{
      message: 'El mensaje no puede estar vacío',
      validate: value => value.length > 0
    }]),
    agree: useField<boolean>(false, [{
      message: 'Debes aceptar los términos y condiciones',
      validate: value => value !== false
    }])
  }
  const { nombre, apellido, email, consulta, mensaje, agree } = fields
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
    validateAll()
    if (isFilled && allSuccess) {
      setSubmitted(true)
      sendForm()
      clearForm()
    }
    else return
  }
  const sendForm = () => {
    toast.success('Mensaje enviado', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
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
    <>
      <form onSubmit={submitHandler} className="grid">
        <FieldText label={'Nombre'} {...nombre} className='grid-1' />
        <FieldText label={'Apellido'} {...apellido} className='grid-1' />
        <FieldText label={'Email'} {...email} className='grid-2' />
        <RadioFieldGroup className='grid-2 flex' label={'Query Type'} error={consulta.error} radios={[
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
        ]} />
        <FieldTextArea label={'Message'} {...mensaje} className='grid-2' />
        <CheckboxField className='grid-2 flex' label={'I agree with the terms and conditions'} {...agree} />
        <button className='grid-2' type="submit" disabled={submitted}>Submit</button>
        {submitted && <p>Submitted</p>}
      </form>
    </>
  )
}

export default Form

