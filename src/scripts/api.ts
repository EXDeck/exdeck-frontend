import { endpoints } from '../ref/endpoints'

import { backendGet, post } from './fetch'

import type { RateLimitStatus } from '@/types/twitter'

const { backend, twitter } = endpoints

export interface AccountsAuthInfo {
  [twitter_id: string]: {
    as: string
    at: string
    ck?: string
    cs?: string
  }
}

export interface OauthTokens {
  oauth_token: string
  url: string
}

export interface Keys {
  key: string
  secret: string
}

const { stringify } = JSON

export const api = {
  // アクセストークン取得
  async authorize(
    oauthToken: string,
    pin: string,
    keys?: Keys,
    lastKeys = false,
  ): Promise<AccountsAuthInfo> {
    const body: {
      keys?: Keys
      lastkeys?: boolean
      oauth_token: string
      oauth_verifier: string
    } = {
      oauth_token: oauthToken,
      oauth_verifier: pin,
      lastkeys: lastKeys,
    }
    keys?.key && keys?.secret && (body.keys = keys)
    const res = await post(backend.authorize, {
      body: stringify(body),
    })
    return res.json()
  },
  async getRateLimitStatus(id: string): Promise<RateLimitStatus> {
    if (!id) throw new Error('No id')
    return backendGet({
      url: twitter.normal['1.1'].application.rateLimitStatus,
      id,
    }).then((res) => res.json())
  },

  /**
   * ログアウト
   *
   * @param {string} [id=''] アカウントID. Default is `''`
   * @returns {Promise<boolean>} 合否
   */
  async logout(id: string = ''): Promise<boolean> {
    if (!id) {
      await post(backend.logoutAll)
    } else {
      await post(backend.logout, {
        body: stringify({ id: id }),
      })
    }
    return true
  },
}
