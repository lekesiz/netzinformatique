import { useEffect } from 'react'
import { useConsent } from '../../consent/ConsentProvider'
import { startSentry, stopSentry } from '../../utils/sentry'

const ConsentIntegrations = () => {
  const { categories } = useConsent()

  useEffect(() => {
    if (categories.functional) {
      startSentry()
    } else {
      stopSentry()
    }

    return () => {
      if (!categories.functional) stopSentry()
    }
  }, [categories.functional])

  return null
}

export default ConsentIntegrations
