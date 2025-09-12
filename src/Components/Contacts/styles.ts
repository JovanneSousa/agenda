import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const ContactContainer = styled.div`
  display: flex;

  h3 {
    margin-right: 16px;
    color: ${cores.buttonColor};
  }

  ul {
    width: 100%;
    padding: 8px;
    background-color: ${cores.sidebar};
    margin-bottom: 8px;
    border-radius: 8px;
  }

  li {
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  .is-editing {
    background-color: ${cores.container};
    border: 1px solid ${cores.buttonColor};
  }
`

export const ButtonDiv = styled.div`
  display: flex;

  button {
    margin-right: 8px;
    background-color: transparent;
    width: 32px;
    border-radius: 8px;
    border: 1px solid ${cores.buttonColor};
    cursor: pointer;
  }

  .isActive,
  button:hover {
    background-color: ${cores.buttonColor};
  }
`
