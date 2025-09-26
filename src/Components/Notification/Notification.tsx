import React, { useEffect, useState } from 'react'
import { NotificationContainer } from './styles'

interface NotificationProps {
  message: string
  type?: 'success' | 'error'
  duration?: number
  onClose?: () => void
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose && onClose(), 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <NotificationContainer type={type} visible={isVisible}>
      {message}
    </NotificationContainer>
  )
}

export default Notification
