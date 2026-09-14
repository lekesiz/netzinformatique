import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '@/components/common/SEO'
import { Button } from '@/components/ui/button'
import { trackNewsletterSignup } from '@/utils/analytics'

const NewsletterConfirmation = () => {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const confirm = async () => {
    setStatus('loading')
    try {
      const response = await fetch('/api/newsletter-confirm', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: params.get('token') || '' }) })
      const result = await response.json().catch(() => ({}))
      setStatus(response.ok ? 'success' : 'error')
      setMessage(result.message || 'La confirmation n’a pas pu être enregistrée.')
      if (response.ok) trackNewsletterSignup()
    } catch {
      setStatus('error'); setMessage('La confirmation n’a pas pu être enregistrée. Réessayez plus tard.')
    }
  }

  return <>
    <SEO title="Confirmation newsletter | NETZ Informatique" description="Confirmez votre inscription à la newsletter NETZ Informatique." url="/newsletter-confirmation" noindex />
    <section className="container mx-auto px-4 py-24"><div className="max-w-xl mx-auto rounded-2xl border bg-card p-8 text-center shadow-sm"><h1 className="text-3xl font-bold mb-4">Confirmer votre inscription</h1><p className="text-muted-foreground mb-7">Cliquez uniquement si vous avez demandé à recevoir la newsletter NETZ Informatique.</p>{status === 'success' ? <p role="status" className="rounded-lg bg-green-50 p-4 text-green-800">{message}</p> : <><Button type="button" size="lg" onClick={confirm} disabled={status === 'loading'}>{status === 'loading' ? 'Confirmation…' : 'Confirmer mon inscription'}</Button>{message && <p role="alert" className="mt-4 text-destructive">{message}</p>}</>}<p className="mt-8"><Link to="/" className="text-primary hover:underline">Retour à l’accueil</Link></p></div></section>
  </>
}

export default NewsletterConfirmation
