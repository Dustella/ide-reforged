import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'

interface Env {
  ranking: KVNamespace
}

// @ts-expect-error fuck promise
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const res = await context.env.ranking.list()
  return new Response(JSON.stringify(res))
}
// @ts-expect-error fuck promise
export const onRequestPut: PagesFunction<Env> = async (context) => {
  // get 'id ' from json body data,  read the value from KV, and return it
  const id = await context.request.json().then((a: any) => a.id)
  const value = await context.env.ranking.get(`net${id}`)
  if (value) {
    await context.env.ranking.put(`net${id}`, String(parseInt(value) + 1),
      { metadata: String(parseInt(value) + 1) })
  }

  else { await context.env.ranking.put(`net${id}`, String(1), { metadata: String(1) }) }

  return new Response(value)
}
