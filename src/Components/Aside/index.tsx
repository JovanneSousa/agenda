import { useSelector } from 'react-redux'
import { ImageContainer, PerfilSection } from './styles'
import type { RootReducer } from '../../Store'

const Perfil = () => {
  const { contact } = useSelector((state: RootReducer) => state.favorites)

  return (
    <PerfilSection>
      <ImageContainer>
        <img src="https://placehold.co/200x200" alt="Imagem de usuário" />
      </ImageContainer>
      <h1>Minha Agenda</h1>
      <div className="fav">
        <h3>favoritos</h3>
        <ul>
          {contact.map((c) => (
            <li>{c.fullName}</li>
          ))}
        </ul>
      </div>
    </PerfilSection>
  )
}
export default Perfil
