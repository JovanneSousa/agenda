import styled from 'styled-components'
import { breakpoints, cores } from '../globalStyle'

interface HamburgerProps {
  open: boolean
}

export const HamburgerIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'open',
})<HamburgerProps>`
  width: 30px;
  height: 3px;
  background-color: ${cores.buttonColor};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 3px;
    background-color: ${cores.buttonColor};
    border-radius: 2px;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  ${({ open }) =>
    open &&
    `
    background-color: transparent;
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
export const Overlay = styled.div<HamburgerProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`
