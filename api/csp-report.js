const allowedMethods = new Set(['POST', 'OPTIONS'])

const safeUrl = (value) => {
  try {
    const url = new URL(value)
    return `${url.origin}${url.pathname}`.slice(0, 240)
  } catch {
    return 'invalid'
  }
}

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (!allowedMethods.has(req.method)) return res.status(405).end()

  const report = req.body?.['csp-report'] || req.body?.body || req.body || {}
  console.warn('csp_violation', {
    document: safeUrl(report['document-uri'] || report.documentURL),
    blocked: safeUrl(report['blocked-uri'] || report.blockedURL),
    directive: String(report['effective-directive'] || report.effectiveDirective || 'unknown').slice(0, 80),
    disposition: String(report.disposition || 'enforce').slice(0, 20),
  })
  return res.status(204).end()
}
