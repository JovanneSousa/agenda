import { ImageContainer, PerfilSection } from './styles'
import user from '../../assets/user.jpg'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../Store'

const Perfil = () => {
  const open = useSelector((state: RootReducer) => state.sidebar.open)

  return (
    <PerfilSection open={open}>
      <ImageContainer>
        <img src={user} alt="Imagem de usuário" />
      </ImageContainer>
      <h1>Minha Agenda</h1>
    </PerfilSection>
  )
}
export default Perfil
