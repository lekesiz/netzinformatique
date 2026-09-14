export const EDITORIAL_AUTHOR = {
  name: 'Mikail Lekesiz',
  role: 'Président de NETZ Informatique',
  url: '/a-propos#direction',
}

const common = {
  dateModified: '2026-09-14',
  author: EDITORIAL_AUTHOR,
}

export const editorialBySlug = {
  'lintelligence-artificielle-pour-les-pme-un-levier-de-croissance-incontournable': {
    ...common,
    sources: [
      ['Commission européenne — cadre réglementaire de l’IA', 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai'],
      ['ANSSI — intelligence artificielle et cybersécurité', 'https://cyber.gouv.fr/'],
      ['CNIL — intelligence artificielle', 'https://www.cnil.fr/fr/intelligence-artificielle'],
    ],
  },
  'le-cloud-computing-en-2025--votre-pme-prte-pour-lavenir-numrique': {
    ...common,
    sources: [
      ['ANSSI — qualification SecNumCloud', 'https://cyber.gouv.fr/produits-certifies/secnumcloud'],
      ['CNIL — sécurité des données', 'https://www.cnil.fr/fr/securite-des-donnees'],
      ['France Num — ressources pour la transformation numérique', 'https://www.francenum.gouv.fr/'],
    ],
  },
  'cybersecurite-pour-les-pme-protegez-votre-entreprise-des-menaces-numeriques': {
    ...common,
    sources: [
      ['Cybermalveillance.gouv.fr — entreprises', 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques'],
      ['ANSSI — guides de bonnes pratiques', 'https://cyber.gouv.fr/bonnes-pratiques-protegez-vous'],
      ['NIST Cybersecurity Framework', 'https://www.nist.gov/cyberframework'],
    ],
  },
  'l-ia-agentique-revolutionner-les-pme-avec-l-autonomie-intelligente': {
    ...common,
    sources: [
      ['Commission européenne — cadre réglementaire de l’IA', 'https://digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai'],
      ['CISA — Artificial Intelligence', 'https://www.cisa.gov/ai'],
      ['NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
    ],
  },
  'l-automatisation-au-service-des-pme-un-levier-de-croissance-incontournable': {
    ...common,
    sources: [
      ['France Num — transformation numérique des TPE/PME', 'https://www.francenum.gouv.fr/'],
      ['CNIL — RGPD : par où commencer', 'https://www.cnil.fr/fr/rgpd-par-ou-commencer'],
    ],
  },
  'la-transformation-numrique-le-levier-essentiel-pour-la-croissance-de-votre-pme': {
    ...common,
    sources: [
      ['France Num — ressources pour les TPE/PME', 'https://www.francenum.gouv.fr/'],
      ['ANSSI — bonnes pratiques', 'https://cyber.gouv.fr/bonnes-pratiques-protegez-vous'],
      ['CNIL — sécurité des données', 'https://www.cnil.fr/fr/securite-des-donnees'],
    ],
  },
}
