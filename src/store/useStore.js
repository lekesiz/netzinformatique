import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

/**
 * Main Zustand store for global state management
 * Combines notification, theme, and UI preferences
 */

const useStore = create(
  persist(
    (set, get) => ({
      // ===== NOTIFICATIONS =====
      notifications: [],

      addNotification: (notification) => {
        const id = Date.now() + Math.random()
        const newNotification = {
          id,
          type: 'info', // info, success, warning, error
          message: '',
          duration: 5000,
          ...notification
        }

        set((state) => ({
          notifications: [...state.notifications, newNotification]
        }))

        // Auto-remove after duration
        if (newNotification.duration > 0) {
          setTimeout(() => {
            get().removeNotification(id)
          }, newNotification.duration)
        }

        return id
      },

      removeNotification: (id) => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id)
        }))
      },

      clearNotifications: () => {
        set({ notifications: [] })
      },

      // ===== THEME =====
      theme: 'light', // 'light' | 'dark' | 'system'

      setTheme: (theme) => {
        set({ theme })

        // Apply theme to document
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          root.classList.add(systemTheme)
        } else {
          root.classList.add(theme)
        }
      },

      // ===== UI PREFERENCES =====
      preferences: {
        introShown: false,
        cookieConsentGiven: false,
        reducedMotion: false,
        compactMode: false,
        sidebarOpen: true
      },

      setPreference: (key, value) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            [key]: value
          }
        }))
      },

      updatePreferences: (updates) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            ...updates
          }
        }))
      },

      // ===== USER SESSION =====
      user: null,
      isAuthenticated: false,

      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user
        })
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false
        })
      },

      // ===== LOADING STATES =====
      loading: {},

      setLoading: (key, isLoading) => {
        set((state) => ({
          loading: {
            ...state.loading,
            [key]: isLoading
          }
        }))
      },

      isLoading: (key) => {
        return get().loading[key] || false
      },

      // ===== MODAL STATES =====
      modals: {},

      openModal: (modalName, data = null) => {
        set((state) => ({
          modals: {
            ...state.modals,
            [modalName]: { isOpen: true, data }
          }
        }))
      },

      closeModal: (modalName) => {
        set((state) => ({
          modals: {
            ...state.modals,
            [modalName]: { isOpen: false, data: null }
          }
        }))
      },

      isModalOpen: (modalName) => {
        return get().modals[modalName]?.isOpen || false
      },

      getModalData: (modalName) => {
        return get().modals[modalName]?.data || null
      },

      // ===== FORM STATES =====
      forms: {},

      setFormData: (formName, data) => {
        set((state) => ({
          forms: {
            ...state.forms,
            [formName]: data
          }
        }))
      },

      getFormData: (formName) => {
        return get().forms[formName] || {}
      },

      clearFormData: (formName) => {
        set((state) => {
          const newForms = { ...state.forms }
          delete newForms[formName]
          return { forms: newForms }
        })
      },

      // ===== RESET =====
      reset: () => {
        set({
          notifications: [],
          theme: 'light',
          preferences: {
            introShown: false,
            cookieConsentGiven: false,
            reducedMotion: false,
            compactMode: false,
            sidebarOpen: true
          },
          user: null,
          isAuthenticated: false,
          loading: {},
          modals: {},
          forms: {}
        })
      }
    }),
    {
      name: 'netz-store', // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist certain values
      partialize: (state) => ({
        theme: state.theme,
        preferences: state.preferences,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)

export default useStore
