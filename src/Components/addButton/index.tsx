import type React from 'react'
import { StyleButton } from './styles'

interface AddButtonProps {
  onClick?: () => void
  add?: boolean
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
}

const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  add = false,
  children,
}) => {
  return (
    <StyleButton onClick={onClick} add={add}>
      {children}
    </StyleButton>
  )
}

export default AddButton
