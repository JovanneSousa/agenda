import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const PerfilSection = styled.aside`
  max-width: 280px;
  width: 100%;
  background-color: ${cores.sidebar};
  height: 100vh;
  text-align: center;
  padding: 32px 0;

  h1 {
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      margin: 8px;
    }
  }
`

export const ImageContainer = styled.div`
  margin-bottom: 24px;
  overflow: hidden;
  img {
    max-width: 200px;
    max-height: 200px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
