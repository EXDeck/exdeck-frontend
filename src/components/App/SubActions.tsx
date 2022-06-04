import { Component, For } from 'solid-js'

import Btn from '../Common/Btn'
import Icon from '../Common/Icon'

import { api } from '@/scripts/api'
import { getGlobalAccounts } from '@/scripts/globalSignals'
import { Account } from '@/types/account.d'

/**
 * Description placeholder
 *
 * @param {Account | null} [account] アカウント情報
 */
function logoutKari(account?: Account) {
  const name = account?.fullUser.name
  const id = account?.id

  if (!confirm(`${name ? name : 'すべてのアカウント'}からログアウトしますか？`)) return
  api
    .logout(id)
    .then(() => location.reload())
    .catch((err: Error) => alert('ログアウトに失敗しました。\n' + err.message))
}

const AccountListKari: Component = () => {
  return (
    <For each={getGlobalAccounts()}>
      {(account) => (
        <Btn onClick={() => logoutKari(account)}>
          <img
            src={account.fullUser.profile_image_url_https}
            alt={`${account.fullUser.name}'s avatar`}
          />
        </Btn>
      )}
    </For>
  )
}

const SubActions: Component = () => {
  return (
    <div class="sub-actions">
      <AccountListKari />
      <Btn onClick={() => logoutKari()}>
        <Icon>logout</Icon>
      </Btn>
    </div>
  )
}

export default SubActions
