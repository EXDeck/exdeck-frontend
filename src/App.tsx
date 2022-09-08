import { Component, createResource, Match, Switch } from 'solid-js'

import { Main } from './pages/Main'
import { Welcome } from './pages/Welcome'
import { auth } from './scripts/backendApi'

const App: Component = () => {
  const [status] = createResource(auth.getAuthStatus)
  // const [getIsLogIn] = createSignal(false)
  return (
    <Switch>
      <Match when={status.loading}>
        <span>Loading...</span>
      </Match>
      <Match when={status()?.signIn}>
        <p>{status()?.specialKey}</p>
        <Main />
      </Match>
      <Match when={!status()?.signIn}>
        <Welcome />
      </Match>
    </Switch>
  )
}

export default App
