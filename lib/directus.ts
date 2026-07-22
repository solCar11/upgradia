export async function directusFetch<T>(
  path: string,
  options?: { params?: Record<string, string> }
): Promise<T> {
  const baseUrl = process.env.DIRECTUS_URL
  const token = process.env.DIRECTUS_TOKEN

  if (!baseUrl || !token) {
    throw new Error('Directus env vars not configured')
  }

  const url = new URL(path, baseUrl)
  if (options?.params) {
    Object.entries(options.params).forEach(([k, v]) => url.searchParams.set(k, v))
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Directus ${path}: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  return json.data as T
}
