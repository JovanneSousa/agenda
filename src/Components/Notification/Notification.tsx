import React, { useEffect, useState } from 'react'
import { NotificationContainer, ProgressBar } from './styles'

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
  const [progress, setProgress] = useState(100) // valor inicial da barra

  useEffect(() => {
    setIsVisible(true)

    const interval = 20 // atualiza a cada 20ms
    const decrement = (interval / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - decrement
      })
    }, interval)

    const timeout = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose && onClose(), 300)
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [duration, onClose])

  return (
    <NotificationContainer type={type} visible={isVisible}>
      {message}
      <ProgressBar progress={progress} />
    </NotificationContainer>
  )
}

export default Notification
