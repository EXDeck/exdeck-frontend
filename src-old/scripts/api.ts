import { endpoints } from '../refs/endpoints'
import { backendGet, post } from './util'
import type { RateLimitStatus } from '@/types/twitter/RateLimit'

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
  /**
   * TwitterにOauthをリクエストして認証用URLを生成
   *
   * @param {object} obj Keys & lastkeys
   * @param {Keys} obj.keys {key: string; secret: string}
   * @param {boolean} obj.lastkeys Lastkeysを使用するか
   * @returns {Promise<OauthTokens>} TwitterのOauthの結果
   */
  async sendOauthRequest({ keys, lastkeys = false }: { keys?: Keys; lastkeys?: boolean }): Promise<OauthTokens> {
    const res = await post(backend.OAuthRequest, {
      body: stringify({
        keys,
        lastkeys,
      }),
    })
    const { oauth_token: oauthToken }: { oauth_token: string } = await res.json()
    if (oauthToken) {
      const url = new URL(twitter.oauth.authenticate)
      url.searchParams.set('oauth_token', oauthToken)
      url.searchParams.set('force_login', 'true')
      return { url: url.toString(), oauth_token: oauthToken }
    } else {
      throw Error('oauth_token was not returned')
    }
  },
  /**
   * OAuthで得られたpinを元に認証してアクセストークンを取得
   *
   * @param {Keys} keys Ckcs
   * @param {boolean} [lastkeys=false] Lastkeysを使用するか. Default is `false`
   * @param {string} oauthToken `sendOauthRequest()`で取得したトークン
   * @param {string} pin 認証用ベージで表示されたpin
   * @returns {Promise<AccountsAuthInfo>} 認証したアカウントのidとckcsatas
   */
  async authorize(keys: Keys, lastkeys: boolean = false, oauthToken: string, pin: string): Promise<AccountsAuthInfo> {
    if (!keys || !oauthToken || !pin) throw Error('keys or oauthToken or pin is a falsy value')
    const body: {
      keys?: Keys
      lastkeys: boolean
      oauthToken: string
      oauthVerifier: string
    } = {
      lastkeys,
      oauthToken,
      oauthVerifier: pin,
    }
    keys?.key && keys?.secret && (body.keys = keys)
    const res = await post(backend.authorize, {
      body: stringify(body),
    })
    return res.json()
  },
  /**
   * ログイン中のアカウントIDの配列を取得
   *
   * @returns {Promise<string[] | false>} ログイン中のアカウントIDの配列。失敗した場合false
   */
  async getAccounts(): Promise<string[] | false> {
    const res = await post(backend.getAccounts)
    const resArr = await res.json()
    if (Array.isArray(resArr) && resArr.length) {
      return resArr
    } else {
      return false
    }
  },
  /**
   * 特殊キーかを判別する
   *
   * @param {string} id アカウントのID
   * @returns {Promise<boolean>} 特殊キーかの真偽
   */
  async isSpecialKeys(id: string): Promise<boolean> {
    try {
      const resJson = await backendGet({
        url: twitter.special['1.1'].search.universal,
        id,
        twitter: {
          q: 'a',
          count: 1,
          modules: 'status',
        },
      }).then((res) => res.json())
      return !('errors' in resJson)
    } catch (e) {
      return false
    }
  },
  async getRateLimitStatus(id: string): Promise<RateLimitStatus> {
    if (!id) throw Error('id is a falsy value')
    return backendGet({
      url: twitter.normal['1.1'].application.rateLimitStatus,
      id,
    }).then((res) => res.json())
  },
  /**
   * 指定されたidのアカウント、idが未入力の場合全アカウントからログアウトする
   *
   * @param {string} [id=''] ログアウトするアカウントのID. Default is `''`
   * @returns {Promise<true>} True
   */
  async logout(id: string = ''): Promise<true> {
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
