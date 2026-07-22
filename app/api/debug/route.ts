import { NextResponse } from 'next/server'
import { readdirSync, existsSync, readFileSync } from 'fs'

export const dynamic = 'force-dynamic'

export async function GET() {
  const envCheck = {
    DIRECTUS_URL: process.env.DIRECTUS_URL ?? 'NOT SET',
    DIRECTUS_TOKEN: process.env.DIRECTUS_TOKEN ? 'SET (hidden)' : 'NOT SET',
    NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL ?? 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    cwd: process.cwd(),
  }

  const filesToCheck = ['/.env', '/app/.env', '.env', '/app/data/.env']
  const fileResults: Record<string, string> = {}
  for (const f of filesToCheck) {
    fileResults[f] = existsSync(f) ? 'EXISTS' : 'not found'
  }

  let rootFiles: string[] = []
  try { rootFiles = readdirSync('/app') } catch {}

  let testFetch = 'not attempted'
  if (process.env.DIRECTUS_URL && process.env.DIRECTUS_TOKEN) {
    try {
      const res = await fetch(`${process.env.DIRECTUS_URL}/items/productos?limit=1&fields=nombre,precio`, {
        headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
        cache: 'no-store',
      })
      const json = await res.json()
      testFetch = JSON.stringify(json.data?.[0] ?? json)
    } catch (e: unknown) {
      testFetch = `ERROR: ${e instanceof Error ? e.message : String(e)}`
    }
  }

  return NextResponse.json({ envCheck, fileResults, rootFiles: rootFiles.slice(0, 20), testFetch })
}
