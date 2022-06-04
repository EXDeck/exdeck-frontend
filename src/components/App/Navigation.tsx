import { Component, createSignal } from 'solid-js'

import Btn from '../Common/Btn'
import Icon from '../Common/Icon'

import ColumnsController from './ColumnsController'
import NavigationLogo from './NavigationLogo'
import SubActions from './SubActions'

const Navigation: Component = () => {
  const [getBtnType, setBtnType] = createSignal<'' | 'primary' | 'mask'>('primary')
  return (
    <nav class="navigation">
      <h2>Navigation</h2>
      <Btn type={getBtnType()} onClick={() => setBtnType(getBtnType() ? '' : 'primary')}>
        <Icon>edit</Icon>
      </Btn>
      <ColumnsController />
      <SubActions />
      <NavigationLogo />
    </nav>
  )
}

export default Navigation
