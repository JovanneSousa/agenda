import type { AppDispatch, RootReducer } from '../../Store'
import { ButtonDiv, ContactContainer, NoContactFound } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineEdit } from 'react-icons/md'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import type Contact from '../../models/Contact'
import { edit, fetchUserContacts, remove } from '../../Store/reducers/contact'
import { cores } from '../../globalStyle'

const Contacts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const [isEditing, setIsEditing] = useState<number | null>(null)
  const { contacts } = useSelector((state: RootReducer) => state.contact)
  const { termo } = useSelector((state: RootReducer) => state.filter)

  useEffect(() => {
    dispatch(fetchUserContacts())
  }, [dispatch])

  type GroupedContacts = {
    [initial: string]: Contact[]
  }

  const groupContactsByInitial = (
    contacts: Contact[] = []
  ): GroupedContacts => {
    return contacts.reduce((acc, contact) => {
      const initial = contact.contactName?.[0]?.toUpperCase() || '#'
      if (!acc[initial]) acc[initial] = []
      acc[initial].push(contact)
      return acc
    }, {} as GroupedContacts)
  }

  const contactFilter = () => {
    let contactFiltred = contacts || []
    if (termo?.trim() !== '') {
      contactFiltred = contactFiltred.filter((c) =>
        c.contactName.toLowerCase().includes(termo.toLowerCase())
      )
    }
    return groupContactsByInitial(contactFiltred)
  }

  const grouped = contactFilter()

  return Object.keys(grouped).length === 0 ? (
    <NoContactFound>Nenhum contato encontrado</NoContactFound>
  ) : (
    <div>
      {Object.keys(grouped)
        .sort()
        .map((initial) => (
          <ContactContainer key={initial}>
            <h3>{initial}</h3>
            <ul>
              {grouped[initial].map((contact) => (
                <li key={contact.contactId}>
                  <input
                    className={
                      isEditing === contact.contactId ? 'is-editing' : ''
                    }
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    disabled={isEditing !== contact.contactId}
                    value={
                      isEditing === contact.contactId
                        ? name
                        : contact.contactName
                    }
                  />
                  <input
                    className={
                      isEditing === contact.contactId ? 'is-editing' : ''
                    }
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    disabled={isEditing !== contact.contactId}
                    value={
                      isEditing === contact.contactId
                        ? email
                        : contact.contactEmail
                    }
                  />
                  <input
                    className={
                      isEditing === contact.contactId ? 'is-editing' : ''
                    }
                    onChange={(e) => setNumber(e.target.value)}
                    type="text"
                    disabled={isEditing !== contact.contactId}
                    value={
                      isEditing === contact.contactId
                        ? number
                        : contact.contactPhone
                    }
                  />
                  <ButtonDiv>
                    {isEditing !== contact.contactId ? (
                      <button
                        onClick={() => {
                          setIsEditing(contact.contactId)
                          setName(contact.contactName)
                          setEmail(contact.contactEmail)
                          setNumber(contact.contactPhone)
                        }}
                      >
                        <MdOutlineEdit />
                      </button>
                    ) : (
                      <button
                        className={isEditing !== null ? 'isActive' : ''}
                        onClick={() => {
                          dispatch(
                            edit({
                              contactId: contact.contactId,
                              contactName: name,
                              contactEmail: email,
                              contactPhone: number,
                            })
                          )
                          setIsEditing(null)
                        }}
                      >
                        <FaCheck color={cores.buttonColor} />
                      </button>
                    )}
                    <button
                      onClick={() => {
                        dispatch(remove(contact.contactId))
                      }}
                    >
                      <FaTrashAlt color={cores.buttonColor} />
                    </button>
                  </ButtonDiv>
                </li>
              ))}
            </ul>
          </ContactContainer>
        ))}
    </div>
  )
}

export default Contacts
