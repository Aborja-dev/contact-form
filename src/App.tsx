import React, { useEffect, useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import Field from './components/Field'
import RadiosField from './components/RadiosField'
import Textarea from './components/TextArea'
import { validateFirstName, validateLastName } from './utils/validators'


function App() {
  const [firstName, setFirstName] = useState('')
  const [errorFirstName, setErrorFirstName] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [lastName, setLastName] = useState('')
  const [errorLastName, setErrorLastName] = useState<string | null>(null)
  
 
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorFirstName(validateFirstName(firstName))
    setErrorLastName(validateLastName(lastName))
    const errors = [
      errorFirstName,
      errorLastName
    ]
    console.log(errors);
    console.log('all errors must be null',errors.every(error => error === null));
    
    if(errors.every(error => error === null)) {
      setSubmitted(true)
    }
  }
  return (
    <>
      <main>
        <article >
          <h1>Contact Us</h1>
          <form onSubmit={submitHandler} className='grid'>
            <Field
              error={errorFirstName}
              onChange={(v) => setFirstName(v)}
              className='grid-1'
              label='First Name'
              submitted={submitted}
            />
             <Field 
               submitted={submitted}
               error={errorLastName} 
               onChange={(v) => setLastName(v)} 
               className='grid-1' 
               label='Last Name' />
           {/* <Field status={email} error={error.email} onChange={(v) => formData['email'] = v} className='grid-2' label='Email Address' />
            <RadiosField
              onChange={(v) => formData['query'] = v}
              className='grid-2'
              label='Query Type'
              fields={[
                {
                  id: 'enquiry',
                  name: 'query',
                  value: 1,
                  label: 'General Enquiry'
                },
                {
                  id: 'support',
                  name: 'query',
                  value: 2,
                  label: 'Support Request'
                }
              ]} />
            <Textarea onChange={(v) => formData['message'] = v} className='grid-2' label='Message' />
            <Checkbox onChange={(v) => formData['agree'] = v} className='grid-2 flex' label=' To submit this form, please consent to being contacted' /> */}
            <button className='grid-2' type="submit">Submit</button>
          </form>
        </article>
      </main>
    </>
  )
}


export default App
