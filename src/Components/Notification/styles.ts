import styled, { css, keyframes } from 'styled-components'
import { cores } from '../../globalStyle'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`

interface NotificationContainerProps {
  type: 'success' | 'error'
  visible: boolean
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 250px;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s forwards;

  ${({ type }) =>
    type === 'success' &&
    css`
      background: ${cores.gradient2};
    `}

  ${({ type }) =>
    type === 'error' &&
    css`
      background: ${cores.gradient3};
    `}
`
