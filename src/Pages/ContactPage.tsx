import { useState } from 'react'
import Perfil from '../Components/Aside'
import Container from '../Components/Content'
import AddContact from '../Components/addContactModal'

export default function ContactsPage() {
  const [isAddButtonActive, setIsAddbuttonActive] = useState(false)

  const handleAddButtonClick = () => {
    setIsAddbuttonActive(!isAddButtonActive)
  }

  return (
    <>
      <Perfil />
      <Container
        isAddButtonActive={isAddButtonActive}
        onClick={handleAddButtonClick}
      />
      {isAddButtonActive && <AddContact onClose={handleAddButtonClick} />}
    </>
  )
}
