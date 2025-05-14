import { ImageContainer, PerfilSection } from './styles'
import user from '../../assets/user.jpg'

const Perfil = () => {
  return (
    <PerfilSection>
      <ImageContainer>
        <img src={user} alt="Imagem de usuário" />
      </ImageContainer>
      <h1>Minha Agenda</h1>
    </PerfilSection>
  )
}
export default Perfil
