import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const StyleButton = styled.div<{ onClick: () => void }>`
  max-width: 56px;
  max-height: 56px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 48px;
  background-color: ${cores.buttonColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  color: ${cores.container};
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: ${cores.container};
    border: 1px solid ${cores.buttonColor};
    color: ${cores.buttonColor};
    transform: scale(1.2);
  }
`
