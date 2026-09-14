const pendingLoads = new Map()

export function loadVendorScript({ id, src, vendor, attributes = {} }) {
  const existing = document.getElementById(id)
  if (existing) return Promise.resolve(existing)
  if (pendingLoads.has(id)) return pendingLoads.get(id)

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    script.dataset.netzVendor = vendor
    Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value))
    script.addEventListener('load', () => resolve(script), { once: true })
    script.addEventListener('error', () => reject(new Error(`Failed to load ${vendor}`)), { once: true })
    document.head.appendChild(script)
  }).finally(() => pendingLoads.delete(id))

  pendingLoads.set(id, promise)
  return promise
}

export function loadVendorStyle({ id, href, vendor }) {
  const existing = document.getElementById(id)
  if (existing) return existing

  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  link.href = href
  link.dataset.netzVendor = vendor
  document.head.appendChild(link)
  return link
}

export function removeVendorNodes(vendor) {
  document.querySelectorAll(`[data-netz-vendor="${vendor}"]`).forEach((node) => node.remove())
}
