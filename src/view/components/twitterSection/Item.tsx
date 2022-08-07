import { destructure } from '@solid-primitives/destructure'
import { FullUser, isFullUser, Status, User } from 'twitter-d'

import { Box } from '../layout/Box'

import type { Component } from 'solid-js'

/**
 * FullUserのプロパティを取得する関数
 *
 * @param {User | FullUser} user Twitter User
 * @param {keyof FullUser} prop Twitter FullUser Props
 * @returns {FullUser[T] | null} Result
 */
function getFullUserProp<T extends keyof FullUser>(
  user: User | FullUser,
  prop: T,
): FullUser[T] | null {
  return isFullUser(user) ? user[prop] : null
}

interface Props {
  item: Status
}

export const Item: Component<Props> = (props) => {
  const { item } = destructure(props)
  return (
    <Box component="article" class="twitter-item">
      <img src={getFullUserProp(item().user, 'profile_image_url_https') || ''} alt="" />
      <Box>
        <h4>{getFullUserProp(item().user, 'name')}</h4>
        <p>{item().full_text}</p>
        <p>
          <small>{item().created_at}</small>
        </p>
      </Box>
    </Box>
  )
}
