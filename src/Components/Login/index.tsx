import { useState } from 'react'
import { LoginSection } from './styles'
import FormRegister from '../FormRegister'
import FormLogin from '../FormLogin'

const Login = () => {
  const [isLoginPageActive, setIsLoginPageActive] = useState<boolean>(true)

  return (
    <LoginSection isLoginPageActive={isLoginPageActive}>
      <div className="container-login">
        <div className="flex">
          <span
            className={isLoginPageActive ? 'is-active' : ''}
            onClick={() => setIsLoginPageActive(true)}
          >
            Login
          </span>
          <span
            className={isLoginPageActive ? '' : 'is-active'}
            onClick={() => setIsLoginPageActive(false)}
          >
            Registrar
          </span>
        </div>
        {isLoginPageActive ? (
          <FormLogin />
        ) : (
          <FormRegister switchToLogin={() => setIsLoginPageActive(true)} />
        )}
      </div>
    </LoginSection>
  )
}

export default Login
