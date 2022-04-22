import { endpoints } from '@/refs/endpoints'

/**
 * バックエンドのエンドポイントにpost
 *
 * @param {RequestInfo} input URL
 * @param {RequestInit | null} [init] Fetch option
 * @returns {Promise<Response>} PromiseなResponse
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
 * バックエンドのエンドポイントにget
 *
 * @param {RequestInfo} input URL
 * @param {RequestInit | null} [init] Fetch option
 * @returns {Promise<Response>} PromiseなResponse
 */
export function get(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const initMerge: RequestInit = {
    ...init,
    method: 'get',
    credentials: 'include',
  }
  return fetch(input, initMerge)
}

interface BackendGetParams {
  id: string
  twitter?: unknown
  url: string
}

/**
 * バックエンドのエンドポイントを使用してTwitterApiのエンドポイントにget
 *
 * @param {BackendGetParams} BackendGetParams { url, id, twitter }
 * @returns {Promise<Response>} PromiseなResponse
 */
export function backendGet({ url, id, twitter }: BackendGetParams): Promise<Response> {
  return post(endpoints.backend.get, {
    body: JSON.stringify({
      url,
      id,
      twitter,
    }),
  })
}
