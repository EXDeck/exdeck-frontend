import { Component, createSignal } from 'solid-js'

import Btn from '../Common/Btn'
import Icon from '../Common/Icon'

import ColumnsController from './ColumnsController'

const Navigation: Component = () => {
  const [getBtnType, setBtnType] = createSignal<'' | 'primary' | 'mask'>('primary')
  return (
    <nav class="navigation">
      <h2>Navigation</h2>
      <Btn type={getBtnType()} onClick={() => setBtnType(getBtnType() ? '' : 'primary')}>
        <Icon>edit</Icon>
      </Btn>
      <ColumnsController />
    </nav>
  )
}

export default Navigation
