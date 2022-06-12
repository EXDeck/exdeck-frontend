// import type { Column } from '../classes/Column'
import { createSignal } from 'solid-js'

import type { Account } from '../types/data/Account'

export const [getAccounts, setAccounts] = createSignal<Promise<Account[]>>()
// export const [getColumns, setColumns] = createSignal<Column[]>([])

/**
 * アカウント情報の取得
 *
 * @param {string} id アカウントのID
 * @returns {Promise<Account>} { fullUser: FullUser id: string specialKey: boolean }
 */
export async function getAccountFromStore(id: string): Promise<Account> {
  const accounts = (await getAccounts()) || []
  const result = accounts.find((account) => account.id === id)
  if (!result) throw Error('Failed to get an Account')
  return result
}
