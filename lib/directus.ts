const DIRECTUS_URL = process.env.DIRECTUS_URL!
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN!

export async function directusFetch<T>(
  path: string,
  options?: { params?: Record<string, string> }
): Promise<T> {
  const url = new URL(path, DIRECTUS_URL)
  if (options?.params) {
    Object.entries(options.params).forEach(([k, v]) => url.searchParams.set(k, v))
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Directus ${path}: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  return json.data as T
}
