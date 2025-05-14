import Contacts from '../Contacts'
import SearchBar from '../SearchBar'
import { ContainerSection } from './styles'

const Container = () => {
  return (
    <ContainerSection>
      <SearchBar />
      <Contacts />
    </ContainerSection>
  )
}

export default Container
