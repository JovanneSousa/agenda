import type { RootReducer } from '../../Store'
import { ContactContainer } from './styles'
import { useSelector } from 'react-redux'
import { MdOutlineEdit } from 'react-icons/md'

const Contacts = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contact)

  type GroupedContacts = {
    [initial: string]: Contact[]
  }

  const groupContactsByInitial = (contacts: Contact[]): GroupedContacts => {
    return contacts.reduce((acc, contact) => {
      const initial = contact.fullName[0].toUpperCase()
      if (!acc[initial]) {
        acc[initial] = []
      }
      acc[initial].push(contact)
      return acc
    }, {} as GroupedContacts)
  }
  const grouped = groupContactsByInitial(contacts)

  return (
    <div>
      {/* {Object.keys(grouped)
        .sort()
        .map((initial) => (
          <div key={initial}>
            <h2>{initial}</h2>
            <ul>
              {grouped[initial].map((contact) => (
                <li key={contact.email}>
                  {contact.fullName} - {contact.number}
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      {Object.keys(grouped)
        .sort()
        .map((initial) => (
          <ContactContainer key={initial}>
            <h3>{initial}</h3>
            <ul>
              {grouped[initial].map((contact) => (
                <li key={contact.fullName}>
                  {contact.fullName} - {contact.email} - {contact.number}
                  <MdOutlineEdit />
                </li>
              ))}
            </ul>
          </ContactContainer>
        ))}
    </div>
  )
}

export default Contacts
