import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const SearchBarSection = styled.div`
  width: 100%;
  margin-bottom: 24px;

  input {
    height: 32px;
    padding: 0 8px;
    width: 100%;
    background-color: ${cores.sidebar};
    border: none;

    &:focus {
      outline-color: ${cores.buttonColor};
    }
  }
`
