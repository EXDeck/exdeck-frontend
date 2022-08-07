import { Status } from 'twitter-d'

import { SerializableColumnData } from '../../types/SerializableColumnData.d'
import { Box } from '../layout/Box'
import { ItemList } from '../twitterSection/ItemList'

import type { Component } from 'solid-js'

interface Props {
  column: SerializableColumnData<unknown>
}

export const Column: Component<Props> = (props) => {
  return (
    <Box component="section" container class="column">
      <Box component="header">
        <h3>
          {props.column.name} <small>{props.column.type}</small>
        </h3>
      </Box>
      <ItemList itemList={props.column.itemList as Status[]} />
    </Box>
  )
}
