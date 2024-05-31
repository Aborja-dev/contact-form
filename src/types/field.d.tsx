export interface FormField {
    label: string
    error: string | null
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export interface FieldError <T>{
    message: string,
    validate: (v: T) => boolean
}

export interface IRadioFieldGroup {
    label: string
    error: string | null
    radios: IRadioField[]
}

export interface IRadioField {
    id: string
    label: string
    value: number
    onChange: () => void
}


export interface IUsefield <T>{
    value: T
    error: string | null
    setValue: React.Dispatch<React.SetStateAction<T>>
    
    validate: (v: T) => void
    clear: () => void
}
