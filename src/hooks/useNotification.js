import useStore from '../store/useStore'

/**
 * Custom hook for notifications
 * Provides convenient methods to show notifications
 */
const useNotification = () => {
  const addNotification = useStore((state) => state.addNotification)

  return {
    success: (message, title = '', duration = 5000) => {
      return addNotification({
        type: 'success',
        message,
        title,
        duration
      })
    },

    error: (message, title = '', duration = 5000) => {
      return addNotification({
        type: 'error',
        message,
        title,
        duration
      })
    },

    warning: (message, title = '', duration = 5000) => {
      return addNotification({
        type: 'warning',
        message,
        title,
        duration
      })
    },

    info: (message, title = '', duration = 5000) => {
      return addNotification({
        type: 'info',
        message,
        title,
        duration
      })
    },

    // Generic method
    show: (message, type = 'info', title = '', duration = 5000) => {
      return addNotification({
        type,
        message,
        title,
        duration
      })
    }
  }
}

export default useNotification
