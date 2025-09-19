import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const SearchBarSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;

  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  input {
    height: 40px;
    padding: 0 8px;
    width: 100%;
    background-color: ${cores.sidebar};
    border: none;

    &:focus {
      outline-color: ${cores.buttonColor};
    }
  }
`
