/* @refresh reload */
import { Component, createSignal, Match, Switch } from 'solid-js'
import { render } from 'solid-js/web'

import 'destyle.css'

import { ImportSass } from './ImportSass'
import { App } from './pages/App'
import { Onboarding } from './pages/Onboarding'

const Index: Component = () => {
  const [getIsLogIn] = createSignal(false)
  return (
    <>
      <ImportSass />
      <Switch>
        <Match when={getIsLogIn()}>
          <App />
        </Match>
        <Match when={!getIsLogIn()}>
          <Onboarding />
        </Match>
      </Switch>
    </>
  )
}

/**
 * View初期化関数
 *
 * @returns {void}
 */
export function viewInit(): void {
  render(() => <Index />, document.getElementById('root')!)
}
