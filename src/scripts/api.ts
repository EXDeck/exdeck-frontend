import { endpoints } from '../ref/endpoints'

import { post } from './fetch'

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
