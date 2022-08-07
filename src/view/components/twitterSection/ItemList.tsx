import { For } from 'solid-js'
import { Status } from 'twitter-d'

import { Box } from '../layout/Box'

import { Item } from './Item'

import type { Component } from 'solid-js'

interface Props {
  itemList: Status[]
}

export const ItemList: Component<Props> = (props) => {
  return (
    <Box class="twitter-item-list">
      <For each={props.itemList}>{(item) => <Item item={item} />}</For>
    </Box>
  )
}
