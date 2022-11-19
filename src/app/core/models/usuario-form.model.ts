export interface UserForm {
  name: string,
  email: string,
  password: string,
  password_repeat: string
}

export interface ErroUserForm {
  name: any,
  email: any,
  password: any,
  password_repeat: any
}