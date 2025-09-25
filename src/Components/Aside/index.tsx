import { ImageContainer, PerfilSection } from './styles'
import user from '../../assets/user.jpg'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../Store'

const Perfil = () => {
  const open = useSelector((state: RootReducer) => state.sidebar.open)
  const userFullName = localStorage.getItem('name')

  return (
    <PerfilSection open={open}>
      <ImageContainer>
        <img src={user} alt="Imagem de usuário" />
      </ImageContainer>
      <h1>{userFullName}</h1>
    </PerfilSection>
  )
}
export default Perfil
