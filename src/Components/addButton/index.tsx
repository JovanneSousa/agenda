import { StyleButton } from './styles'

interface AddButtonProps {
  onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return <StyleButton onClick={onClick}>+</StyleButton>
}

export default AddButton
