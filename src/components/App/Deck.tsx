import Columns from './Columns'
import Navigation from './Navigation'

import type { Component } from 'solid-js'

const Deck: Component = () => {
  return (
    <div class="deck">
      <Navigation />
      <Columns />
    </div>
  )
}

export default Deck
