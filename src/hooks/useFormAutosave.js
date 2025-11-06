import { useEffect, useRef } from 'react'

/**
 * Auto-save form data to localStorage
 *
 * @param {Object} formData - The form data to auto-save
 * @param {string} storageKey - The localStorage key
 * @param {number} delay - Debounce delay in ms (default: 1000)
 * @returns {Object} - { clearSavedData, getSavedData, hasSavedData }
 */
export function useFormAutosave(formData, storageKey, delay = 1000) {
  const timeoutRef = useRef(null)
  const initialLoadRef = useRef(false)

  // Save to localStorage with debounce
  useEffect(() => {
    // Skip initial render
    if (!initialLoadRef.current) {
      initialLoadRef.current = true
      return
    }

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      try {
        const dataToSave = {
          data: formData,
          timestamp: Date.now(),
        }
        localStorage.setItem(storageKey, JSON.stringify(dataToSave))
        console.log('[Auto-save] Form data saved to localStorage')
      } catch (error) {
        console.error('[Auto-save] Failed to save:', error)
      }
    }, delay)

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [formData, storageKey, delay])

  // Get saved data from localStorage
  const getSavedData = () => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const parsed = JSON.parse(saved)
        return parsed.data
      }
    } catch (error) {
      console.error('[Auto-save] Failed to load:', error)
    }
    return null
  }

  // Check if saved data exists
  const hasSavedData = () => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved !== null
    } catch (error) {
      return false
    }
  }

  // Clear saved data
  const clearSavedData = () => {
    try {
      localStorage.removeItem(storageKey)
      console.log('[Auto-save] Cleared saved data')
    } catch (error) {
      console.error('[Auto-save] Failed to clear:', error)
    }
  }

  return {
    getSavedData,
    hasSavedData,
    clearSavedData,
  }
}

/**
 * Get timestamp of saved data
 */
export function getSavedDataTimestamp(storageKey) {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed.timestamp
    }
  } catch (error) {
    console.error('[Auto-save] Failed to get timestamp:', error)
  }
  return null
}
