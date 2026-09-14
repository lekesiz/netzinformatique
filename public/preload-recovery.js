window.addEventListener('vite:preloadError', function (event) {
  event.preventDefault()
  var key = 'netz-preload-reload-at'
  var now = Date.now()
  var previous = 0
  try { previous = Number(sessionStorage.getItem(key) || 0) } catch (_) {}

  if (now - previous > 60000) {
    try { sessionStorage.setItem(key, String(now)) } catch (_) {}
    window.location.reload()
    return
  }

  var root = document.getElementById('root')
  if (!root) return
  root.innerHTML = '<main style="max-width:42rem;margin:4rem auto;padding:1.5rem;font-family:system-ui"><h1>Mise à jour nécessaire</h1><p>Une nouvelle version du site est disponible. Rechargez la page dans un instant.</p><button id="netz-reload" type="button" style="padding:.75rem 1rem">Recharger</button></main>'
  document.getElementById('netz-reload')?.addEventListener('click', function () {
    window.location.reload()
  })
})
