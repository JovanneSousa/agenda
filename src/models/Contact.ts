class Contact {
  fullName: string
  email: string
  number: number
  id: number

  constructor(fullName: string, email: string, number: number, id: number) {
    this.email = email
    this.fullName = fullName
    this.number = number
    this.id = id
  }
}

export default Contact
