export interface FormData {
  categories: string[]
  optionalItems: string[]
}

export interface FormState {
  name: string
  email: string
  category: string
  optionalItem?: string
  message: string
}