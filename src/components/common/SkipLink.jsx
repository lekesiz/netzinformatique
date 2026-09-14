import { useTranslation } from 'react-i18next'

const SkipLink = () => {
  const { t } = useTranslation()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-background focus:text-foreground focus:border-2 focus:border-ring focus:rounded-md focus:shadow-xl"
    >
      {t('common.skipToContent', 'Aller au contenu principal')}
    </a>
  )
}

export default SkipLink
