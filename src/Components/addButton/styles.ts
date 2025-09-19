import styled from 'styled-components'
import { breakpoints, cores } from '../../globalStyle'

export const StyleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'add',
})<{ add?: boolean }>`
  ${(props) =>
    props.add
      ? `
    position: fixed;
    bottom: 20px;
    right: 50%;
    transform: translateX(calc(${breakpoints.containerMaxWidth} / 2 - 20px));
    width: 56px;
    height: 56px;
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
  z-index: 0;
  border: none;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.1);
    ${(props) =>
      props.add
        ? `transform: translateX(calc(${breakpoints.containerMaxWidth} / 2 - 20px)) scale(1.03);`
        : `transform: scale(1.03);`}
  }

  @media (max-width: ${breakpoints.tablet}) {
    right: 20px;
    left: auto;
    transform: scale(1);

    &:hover {
      transform: scale(1.03);
    }
  }
`
