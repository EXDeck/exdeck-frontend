import Btn from '../Common/Btn'
import Icon from '../Common/Icon'

import type { Component } from 'solid-js'

import { api } from '@/scripts/api'

const SubActions: Component = () => {
  return (
    <div class="sub-actions">
      <Btn
        onClick={() => {
          if (!confirm('ログアウトしますか？')) return
          api.logout()
          location.reload()
        }}
      >
        <Icon>logout</Icon>
      </Btn>
    </div>
  )
}

export default SubActions
