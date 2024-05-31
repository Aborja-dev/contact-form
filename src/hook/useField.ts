import React from "react"

interface FieldError <T>{
    message: string,
    validate: (v: T) => boolean
}

interface IUsefield <T>{
    value: T
    error: string | null
    setValue: React.Dispatch<React.SetStateAction<T>>
    
    validate: (v: T) => void
    clear: () => void
}

interface TextField extends IUsefield<string>{
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface RadioField extends IUsefield<number>{
    changeHandler: (v: number) => void
}


const validateFn = <T>(value: T, errors: FieldError<typeof value>[]): string | null => {
    const validateResult = errors
        .map(error => error.validate(value) ? null : error.message)
    return validateResult.find(res => res) ?? null
}

export const useField = <T>(
    initialValue: T,
    errors: FieldError<T>[]
) => {
    const [value, setValue] = React.useState<T>(initialValue)
    const [error, setError] = React.useState<string | null>(null)
    const validate = (v: T) => {
        const isValid = validateFn(v, errors) === null 
        const errorMessage = validateFn(v, errors)
        if (!isValid) {
            setError(errorMessage)
            setValue(initialValue)
        } else {
            setError(null)
        }
    }
    const changeHandler = (value: T) => {
        setError(null)
        setValue(value)
    }

    const clear= () => {
        setValue(initialValue)
        setError(null)
    }
    return { value, setValue, changeHandler, validate, clear, error }
}

export const useTextField = (
    initialValue: string,
    errors: FieldError<string>[]
): TextField => {
    const [value, setValue] = React.useState<string>(initialValue)
    const [error, setError] = React.useState<string | null>(null)
    const validate = (v: string) => {
        const isValid = validateFn(v, errors) === null 
        const errorMessage = validateFn(v, errors)
        if (!isValid) {
            setError(errorMessage)
            setValue(initialValue)
        } else {
            setError(null)
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setError(null)
        setValue(value)
    }

    const clear= () => {
        setValue(initialValue)
        setError(null)
    }
    return { value, setValue, changeHandler, validate, clear, error }
}

export const useRadioField = (
    initialValue: number,
    errors: FieldError<number>[]
) => {
    const [value, setValue] = React.useState<number>(initialValue)
    const [error, setError] = React.useState<string | null>(null)

    const validate = (v: number) => {
        const isValid = validateFn(v, errors) === null 
        const errorMessage = validateFn(v, errors)
        if (!isValid) {
            setError(errorMessage)
            setValue(initialValue)
        } else {
            setError(null)
        }
    }

    const changeHandler = (value: number) => {
        setError(null)
        setValue(value)
    }

    const clear= () => {
        setValue(initialValue)
        setError(null)
    }

    return { value, setValue, changeHandler, validate, error, clear }

}