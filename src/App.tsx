import { Provider } from 'react-redux'
import Perfil from './Components/Aside'
import Container from './Components/Content'
import { GlobalStyle } from './globalStyle'
import { store } from './Store'
import AddContact from './Components/addContactModal'
import { useState } from 'react'

function App() {
  const [isAddButtonActive, setIsAddbuttonActive] = useState(false)

  const handleAddButtonClick = () => {
    setIsAddbuttonActive(!isAddButtonActive)
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Perfil />
        <Container
          isAddButtonActive={isAddButtonActive}
          onClick={handleAddButtonClick}
        />
      </div>
      {isAddButtonActive && <AddContact onClose={handleAddButtonClick} />}
    </Provider>
  )
}

export default App
