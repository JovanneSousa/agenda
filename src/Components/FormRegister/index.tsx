import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../addButton'
import type { AppDispatch, RootReducer } from '../../Store'
import React, { useState } from 'react'
import { register } from '../../Store/reducers/auth'

const FormRegister = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { error, loading } = useSelector((state: RootReducer) => state.auth)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('As senhas não conferem!')
      return
    }
    dispatch(register({ username, name, email, password }))
    clearInput()
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
        name="name"
        id="name"
        placeholder="Nome"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="user"
        id="user"
        placeholder="Usuário"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        autoComplete="current-password"
      />
      <input
        type="password"
        value={confirmPassword}
        name="confirm-password"
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
