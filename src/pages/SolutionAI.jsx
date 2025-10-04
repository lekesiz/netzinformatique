import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SolutionAI = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to IA Offline service page
    navigate('/services/ia-offline', { replace: true })
  }, [navigate])

  return null
}

export default SolutionAI
