import { Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SocialShare = ({ url, title, description }) => {
  const fullUrl = `https://www.netzinformatique.fr${url}`

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + fullUrl)}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl)
    alert('Lien copié dans le presse-papiers!')
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-semibold text-muted-foreground mr-2">Partager:</span>

      <Button asChild variant="outline" size="sm" className="gap-2">
<a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook size={16} />
          Facebook
        </a>
</Button>

      <Button asChild variant="outline" size="sm" className="gap-2">
<a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter size={16} />
          Twitter
        </a>
</Button>

      <Button asChild variant="outline" size="sm" className="gap-2">
<a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
          LinkedIn
        </a>
</Button>

      <Button asChild variant="outline" size="sm" className="gap-2">
<a href={shareLinks.email}>
          <Mail size={16} />
          Email
        </a>
</Button>

      <Button variant="outline" size="sm" className="gap-2" onClick={copyToClipboard}>
        <LinkIcon size={16} />
        Copier
      </Button>
    </div>
  )
}

export default SocialShare
