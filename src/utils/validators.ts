
export const validateFirstName = (firstName: string) => {
    const regex = /^[A-Z][a-z]*([ ]?[A-Z][a-z]*)*$/
    if (firstName.length <= 0) return 'name is required'
    if (!regex.test(firstName)) return 'invalid name'
    else {
      return null
    }
  }
  
  export const validateLastName = (lastName: string) => {
    const regex = /^[A-Z][a-z]*([ ]?[A-Z][a-z]*)*$/
    if (lastName.length <= 0) return 'last name is required'
    if (!regex.test(lastName)) return 'invalid last name'
    else {
      return null
    }
  }
  
  export const validateEmail = (email: string) => {
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (email.length <= 0) return 'email is required'
    if (email.indexOf('@') === -1) return 'invalid email'
    if (!emailregex.test(email)) return 'invalid email'
    else {
      return null
    }
  }
  
  
  export const validateAgree = (agree: boolean) => {
    if (!agree) {
      return 'You must agree to the terms and conditions'
    } else {
      return null
    }
  }
  
  export const validateQuery = (query: number) => {
    if (query === 0) {
      return 'You must select a query type'
    } else {
      return null
    }
  }
  