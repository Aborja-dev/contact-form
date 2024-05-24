export interface FormData {
    firstName: string
    lastName: string
    email: string
    query: number
    message?: string
    agree: boolean
  }

const FIELD_STATUS = {
    ERROR: 'error',
    SUCCESS: 'success',
    DEFAULT: 'default',
    SUBMITTED: 'submitted'
} as const

export type FieldStatus = typeof FIELD_STATUS[keyof typeof FIELD_STATUS]