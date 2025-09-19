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
  background: ${cores.gradient2};
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
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.1);
    transform: scale(1.2);
  }
`
