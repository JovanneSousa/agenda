import AddButton from '../addButton'
import Contacts from '../Contacts'
import SearchBar from '../SearchBar'
import { ContainerSection } from './styles'

interface ContainerProps {
  onClick: () => void
  isAddButtonActive: boolean
}

const Container: React.FC<ContainerProps> = ({
  onClick,
  isAddButtonActive,
}) => {
  return (
    <ContainerSection>
      <SearchBar />
      <Contacts />
      {!isAddButtonActive && (
        <AddButton type="button" children="+" add onClick={onClick} />
      )}
    </ContainerSection>
  )
}

export default Container
