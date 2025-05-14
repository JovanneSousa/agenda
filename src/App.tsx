import { Provider } from 'react-redux'
import Perfil from './Components/Aside'
import Container from './Components/Content'
import { GlobalStyle } from './globalStyle'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Perfil />
        <Container />
      </div>
    </Provider>
  )
}

export default App
