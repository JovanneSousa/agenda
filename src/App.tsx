import { Provider } from 'react-redux'
import { GlobalStyle } from './globalStyle'
import { store } from './Store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ContactsPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'
import PrivateRoute from './routes/PrivateRoutes'
import { NotificationProvider } from './Components/Notification/NotificationProvider'

function App() {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <GlobalStyle />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </NotificationProvider>
    </Provider>
  )
}

export default App
