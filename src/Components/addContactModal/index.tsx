import { FaCheck } from 'react-icons/fa'
import { Container, Add } from './styles'
import { cores } from '../../globalStyle'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { addContact } from '../../Store/reducers/contact'
import type { AppDispatch } from '../../Store'

interface AddContactProps {
  onClose: () => void
}
const AddContact: React.FC<AddContactProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  const limpaFormulario = () => {
    setEmail('')
    setName('')
    setNumber('')
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(addContact({ name, email, phone: number }))

    limpaFormulario()
  }

  return (
    <>
      <Container
        onClick={onClose}
        className={isVisible ? 'visible' : ''}
      ></Container>
      <Add className={isVisible ? 'visible' : ''}>
        <h2>Adicionar Novo Contato</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Nome:</label>
            <input
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="number">Numero:</label>
            <input
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              id="number"
              type="text"
            />
          </div>
          <div className="button">
            <button type="submit">
              <FaCheck color={cores.buttonColor} />
            </button>
            <button type="button" onClick={limpaFormulario}>
              X
            </button>
          </div>
        </form>
      </Add>
    </>
  )
}

export default AddContact
