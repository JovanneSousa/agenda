import type { RootReducer } from '../../Store'
import { ContactContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineEdit } from 'react-icons/md'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import type Contact from '../../models/Contact'
import { edit, remove } from '../../Store/reducers/contact'

const Contacts = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)

  const [isEditing, setIsEditing] = useState<number | null>(null)
  const { contacts } = useSelector((state: RootReducer) => state.contact)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

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

  const contactFilter = () => {
    let contactFiltred = contacts
    if (termo !== undefined && termo.trim() !== '') {
      contactFiltred = contactFiltred.filter((c) =>
        c.fullName.toLowerCase().includes(termo.toLowerCase())
      )
    }
    return groupContactsByInitial(contactFiltred)
  }

  const grouped = contactFilter()

  return (
    <div>
      {Object.keys(grouped)
        .sort()
        .map((initial) => (
          <ContactContainer key={initial}>
            <h3>{initial}</h3>
            <ul>
              {grouped[initial].map((contact) => (
                <li key={contact.id}>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    disabled={isEditing !== contact.id}
                    value={isEditing === contact.id ? name : contact.fullName}
                  />{' '}
                  -{' '}
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    disabled={isEditing !== contact.id}
                    value={isEditing === contact.id ? email : contact.email}
                  />
                  -
                  <input
                    onChange={(e) => setNumber(Number(e.target.value))}
                    type="number"
                    disabled={isEditing !== contact.id}
                    value={isEditing === contact.id ? number : contact.number}
                  />
                  {isEditing !== contact.id ? (
                    <button
                      onClick={() => {
                        setIsEditing(contact.id)
                        setName(contact.fullName)
                        setEmail(contact.email)
                        setNumber(contact.number)
                      }}
                    >
                      <MdOutlineEdit />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(
                          edit({
                            email,
                            number,
                            fullName: name,
                            id: contact.id,
                          })
                        )
                        setIsEditing(null)
                      }}
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      dispatch(remove(contact.id))
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </ContactContainer>
        ))}
    </div>
  )
}

export default Contacts
