import type { Component } from 'solid-js'

import { Box } from '@/components/Box'
import './Deck.scss'
import { Navigation } from '@/ui/Navigation'

export const Deck: Component = (props) => {
  return (
    <Box class="exd-ui-deck">
      <Navigation direction="vertical" />
      <Box>Columns</Box>
    </Box>
  )
}
