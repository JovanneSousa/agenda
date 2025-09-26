import React, { createContext, useContext, useState } from 'react'
import Notification from './Notification'

interface NotificationContextProps {
  showNotification: (message: string, type?: 'success' | 'error') => void
}

const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => {},
})

export const useNotification = () => useContext(NotificationContext)

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const showNotification = (
    message: string,
    type: 'success' | 'error' = 'success'
  ) => {
    setNotification({ message, type })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </NotificationContext.Provider>
  )
}
