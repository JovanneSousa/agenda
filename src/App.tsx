import { Provider } from 'react-redux'
import { GlobalStyle } from './globalStyle'
import { store } from './Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactsPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
