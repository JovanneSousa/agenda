import AddButton from '../addButton'

const FormRegister = () => {
  return (
    <form action={'submit'}>
      <input type="text" name="name" id="name" placeholder="Nome" />
      <input type="text" name="user" id="user" placeholder="Usuário" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        autoComplete="current-password"
      />
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirme a senha"
        autoComplete="current-password"
      />
      <AddButton children="Cadastrar" type="submit" />
    </form>
  )
}

export default FormRegister
