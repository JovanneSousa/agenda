import AddButton from '../addButton'
import type React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootReducer } from '../../Store'
import { useState } from 'react'
import { login } from '../../Store/reducers/auth'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { error } = useSelector((state: RootReducer) => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await dispatch(login({ username, password })).unwrap()

      localStorage.setItem('token', result.token)
      localStorage.setItem('name', result.name)
      clearInput()
      navigate('/contacts')
    } catch (err) {
      console.error(err)
    }
  }

  const clearInput = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="user"
        placeholder="Usuário"
        autoComplete="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        placeholder="Senha"
        autoComplete="current-password"
      />
      <AddButton type="submit" children="Entrar" />
      {error && <p>{error}</p>}
    </form>
  )
}

export default FormLogin
