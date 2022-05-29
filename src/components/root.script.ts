import { FullUser, isFullUser } from 'twitter-d'

import { endpoints } from '@/ref/endpoints'
import { backendGet, post } from '@/scripts/fetch'
import { Account } from '@/types/account.d'

const { twitter } = endpoints

/**
 * ログイン中のアカウント情報を取得
 *
 * @returns {Promise<Account[]>} { fullUser: FullUser, id: string, specialKey: boolean }
 */
export async function getAccountsList(): Promise<Account[]> {
  const ids: string[] = await post(endpoints.backend.getAccounts).then((res) => res.json())
  if (!Array.isArray(ids)) throw Error('Failed to get an accounts.')
  return Promise.all(
    ids.map(async (id): Promise<Account> => {
      const specialKey = await isSpecialKeys(id)
      const fullUser = await backendGet({
        url: endpoints.twitter.normal['1.1'].users.show,
        id,
        twitter: {
          user_id: id,
        },
      }).then(async (res): Promise<FullUser> => {
        const json = await res.json()
        if (!isFullUser(json)) throw Error(`Failed to get FullUser for account "${id}"`)
        return json
      })
      return { id, specialKey, fullUser }
    }),
  )
}

/**
 * 特殊キーかを判別する
 *
 * @param {string} id アカウントID
 * @returns {Promise<boolean>} 真偽
 */
async function isSpecialKeys(id: string): Promise<boolean> {
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
}
