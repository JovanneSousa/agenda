import styled from 'styled-components'
import { breakpoints, cores } from '../../globalStyle'

export const ContactContainer = styled.div`
  display: flex;

  h3 {
    margin-right: 16px;
    color: ${cores.buttonColor};
  }

  ul {
    width: 100%;
    background-color: ${cores.sidebar};
    margin-bottom: 8px;
    border-radius: 8px;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-radius: 8px;
    transition: transform 0.3s ease;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }

    &:hover {
      box-shadow: 0 0 10px 5px ${cores.buttonColorGradient};
      transform: scale(1.01);
    }
  }

  .is-editing {
    background-color: ${cores.container};
    border: 1px solid ${cores.buttonColor};
  }

  input {
    @media (max-width: ${breakpoints.tablet}) {
      margin: 4px;
    }
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin-right: 8px;
    background-color: transparent;
    width: 32px;
    border-radius: 8px;
    border: 1px solid ${cores.buttonColor};
    cursor: pointer;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
  }

  .isActive,
  button:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.1);
    transform: scale(1.2);
    background-color: ${cores.buttonColor};
  }

  button {
    @media (max-width: ${breakpoints.tablet}) {
      padding: 8px;
    }
  }
`
