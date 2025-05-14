import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const ContactContainer = styled.div`
  display: flex;

  h3 {
    margin-right: 16px;
  }

  li {
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.lightGray};
    border: 1px solid ${cores.lightGray};
  }
`
