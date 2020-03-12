addEventListener("fetch", event => {
  event.respondWith(fetchUrlContent(event.request))
})

function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}

async function fetchUrlContent(request) {
  realUrl = getUrlParams(request.url)['url']
  realRequest = request.clone()
  realRequest.url = realUrl
  return fetch(realRequest)
}
