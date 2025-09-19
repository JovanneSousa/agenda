import styled from 'styled-components'
import { cores } from '../../globalStyle'

export const StyleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'add',
})<{ add?: boolean }>`
  ${(props) =>
    props.add
      ? `
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 56px;
    heigh: 56px;
    font-size: 48px;
    border-radius: 50%;
    color: ${cores.container};
  `
      : `
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  color: ${cores.white};
  font-size: 16px;
  `}
  background: ${cores.gradient2};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  border: none;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.1);
    transform: scale(1.03);
  }
`
