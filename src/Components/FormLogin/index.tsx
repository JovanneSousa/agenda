import AddButton from '../addButton'

const FormLogin = () => {
  return (
    <form action="sumbit">
      <input
        type="text"
        name="user"
        id="user"
        placeholder="Usuário"
        autoComplete="username"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        autoComplete="current-password"
      />
      <AddButton type="submit" children="Entrar" />
    </form>
  )
}

export default FormLogin
