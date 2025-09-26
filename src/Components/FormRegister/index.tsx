import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../addButton'
import type { AppDispatch, RootReducer } from '../../Store'
import React, { useState } from 'react'
import { register } from '../../Store/reducers/auth'
import { useNotification } from '../Notification/NotificationProvider'

interface FormRegisterProps {
  switchToLogin: () => void
}

const FormRegister: React.FC<FormRegisterProps> = ({ switchToLogin }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { error } = useSelector((state: RootReducer) => state.auth)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { showNotification } = useNotification()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('As senhas não conferem!')
      return
    }
    try {
      await dispatch(register({ username, name, email, password })).unwrap()
      showNotification('Registro Efetuado com sucesso!', 'success')
      clearInput()
      switchToLogin()
    } catch (err) {
      showNotification('Erro ao registrar usuário!', 'error')
    }
  }

  const clearInput = () => {
    setName('')
    setEmail('')
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        placeholder="Nome"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="user"
        placeholder="Usuário"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
        placeholder="Senha"
        autoComplete="current-password"
      />
      <input
        type="password"
        value={confirmPassword}
        id="confirm-password"
        placeholder="Confirme a senha"
        autoComplete="current-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <AddButton children="Cadastrar" type="submit" />
      {error && <p>{error}</p>}
    </form>
  )
}

export default FormRegister
