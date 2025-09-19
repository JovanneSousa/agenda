import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const LoginSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== 'isLoginPageActive',
})<{ isLoginPageActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${cores.container};

  span {
    color: ${cores.darkgray};
    padding: 8px 16px;
    cursor: pointer;
    position: relative;

    &.is-active {
      font-weight: bold;
      color: ${cores.background};
    }

    &.is-active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${cores.buttonColor};
      border-radius: 2px;
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${cores.buttonColor};
      border-radius: 2px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  }

  .flex {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
  }

  .container-login {
    display: block;
    background-color: ${cores.white};
    padding: 24px;
    border-radius: 8px;
    color: ${cores.darkgray};
    width: 100%;
    max-width: 400px;
    height: ${(props) => (props.isLoginPageActive ? '250px' : '400px')};
    transition: height 0.3s ease;
    overflow: hidden;
  }

  input {
    width: 100%;
    display: flex;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${cores.textColor};
    margin: 16px 0;
    font-size: 16px;
    transition: width 0.2s ease;

    &:focus {
      outline-color: ${cores.buttonColor};
    }
  }
`
