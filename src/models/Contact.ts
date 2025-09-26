class Contact {
  contactName: string
  contactEmail: string
  contactPhone: string
  contactId: number

  constructor(
    contactName: string,
    contactEmail: string,
    contactPhone: string,
    contactId: number
  ) {
    this.contactEmail = contactEmail
    this.contactName = contactName
    this.contactPhone = contactPhone
    this.contactId = contactId
  }
}

export default Contact
