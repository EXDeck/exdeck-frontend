import { endpoints } from '@/ref/endpoints'

/**
 * バックエンドにpost
 *
 * @param {RequestInfo} input URL
 * @param {RequestInit | null} [init] Fetchのオプション
 * @returns {Promise<Response>} Fetchの結果
 */
export function post(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const initMerge: RequestInit = {
    ...init,
    method: 'post',
    credentials: 'include',
  }
  return fetch(input, initMerge)
}

/**
 * バックエンドにget
 *
 * @param {RequestInfo} input URL
 * @param {RequestInit | null} [init] Fetchのオプション
 * @returns {Promise<Response>} Fetchの結果
 */
export function get(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const initMerge: RequestInit = {
    ...init,
    method: 'get',
    credentials: 'include',
  }
  return fetch(input, initMerge)
}

interface BackendGet {
  id: string
  twitter?: unknown
  url: string
}

/**
 * バックエンドを経由してTwitterAPIにpost
 *
 * @param {BackendGet} backendGet { url, id, twitter }
 * @returns {Promise<Response>} Fetchの結果
 */
export async function backendGet({ url, id, twitter }: BackendGet): Promise<Response> {
  return post(endpoints.backend.get, {
    body: JSON.stringify({
      url,
      id,
      twitter,
    }),
  })
}
