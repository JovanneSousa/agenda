import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const PerfilSection = styled.aside`
  max-width: 280px;
  width: 100%;
  background-color: ${cores.lightGray};
  height: 100vh;
  text-align: center;
  padding: 32px 0;
`

export const ImageContainer = styled.div`
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`
