import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SolutionCloud = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to Cloud & Réseau service page
    navigate('/services/cloud-reseau', { replace: true })
  }, [navigate])

  return null
}

export default SolutionCloud
