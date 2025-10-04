import { Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SocialShare = ({ url, title, description }) => {
  const fullUrl = `https://netzinformatique.vercel.app${url}`
  
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
      <span className="text-sm font-semibold text-gray-600 mr-2">Partager:</span>
      
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="gap-2">
          <Facebook size={16} />
          Facebook
        </Button>
      </a>
      
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="gap-2">
          <Twitter size={16} />
          Twitter
        </Button>
      </a>
      
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="gap-2">
          <Linkedin size={16} />
          LinkedIn
        </Button>
      </a>
      
      <a href={shareLinks.email}>
        <Button variant="outline" size="sm" className="gap-2">
          <Mail size={16} />
          Email
        </Button>
      </a>
      
      <Button variant="outline" size="sm" className="gap-2" onClick={copyToClipboard}>
        <LinkIcon size={16} />
        Copier
      </Button>
    </div>
  )
}

export default SocialShare
