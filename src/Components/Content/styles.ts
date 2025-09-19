import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const ContainerSection = styled.div`
  background-color: ${cores.container};
  width: 100%;
  padding: 32px 8px;
  overflow-y: scroll;
  scrollbar-width: none;
  position: relative;
  padding: 16px;
  height: 100vh;

  input {
    height: 32px;
    padding: 0 8px;
    border-radius: 8px;
    width: 100%;
    margin-right: 16px;
    background-color: ${cores.sidebar};
    border: 1px solid ${cores.sidebar};
    font-size: 16px;
  }
`
