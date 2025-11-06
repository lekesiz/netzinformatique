import { useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../../store/useStore'

/**
 * Toast notification component
 * Displays notifications from Zustand store
 */

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
}

const colors = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800'
}

const iconColors = {
  success: 'text-green-600',
  error: 'text-red-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600'
}

const NotificationToast = () => {
  const notifications = useStore((state) => state.notifications)
  const removeNotification = useStore((state) => state.removeNotification)

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => {
          const Icon = icons[notification.type] || Info

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-lg border shadow-lg ${
                colors[notification.type] || colors.info
              }`}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  iconColors[notification.type] || iconColors.info
                }`}
                aria-hidden="true"
              />

              <div className="flex-1 min-w-0">
                {notification.title && (
                  <p className="font-semibold text-sm mb-1">{notification.title}</p>
                )}
                <p className="text-sm">{notification.message}</p>
              </div>

              <button
                onClick={() => removeNotification(notification.id)}
                className="flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default NotificationToast
