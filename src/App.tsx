import { Component, createResource, Match, Switch } from 'solid-js'

import { Main } from './pages/Main'
import { Welcome } from './pages/Welcome'
import { auth } from './scripts/backendApi'

import './App.scss'
import '../node_modules/destyle.css'

const App: Component = () => {
  const [status] = createResource(auth.getAuthStatus)
  // const [getIsLogIn] = createSignal(false)
  return (
    <Switch>
      <Match when={status.loading}>
        <span>Loading...</span>
      </Match>
      <Match when={status()?.signIn}>
        <Main />
      </Match>
      <Match when={!status()?.signIn}>
        <Welcome />
      </Match>
    </Switch>
  )
}

export default App
