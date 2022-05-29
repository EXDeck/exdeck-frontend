import { createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Link, MetaProvider } from 'solid-meta'
import { Transition } from 'solid-transition-group'

import App from './App'
import Loading from './Common/Loading'
import { getAccountsList } from './root.script'
import StartupError from './StartupError'

type ScreenState = 'loading' | 'error' | 'onboarding' | 'app'

const screen = {
  loading: () => <Loading type="logo" />,
  error: () => <StartupError message={getErrorMessage()} />,
  onboarding: () => <div>Onboarding</div>,
  app: () => <App />,
}

const [getErrorMessage, setErrorMessage] = createSignal('')
const [getScreenState, setScreenState] = createSignal<ScreenState>('loading')

const root = () => {
  getAccountsList()
    .then((accounts) => {
      if (accounts.length) setScreenState('app')
      else setScreenState('onboarding')
    })
    .catch((error: Error) => {
      setErrorMessage(error.message)
      setScreenState('error')
    })

  return (
    <MetaProvider>
      <Link rel="stylesheet" href={`/themes/${'harmony.min.css'}`} />
      <Transition name="transition-fade">
        <Dynamic component={screen[getScreenState()]} />
      </Transition>
    </MetaProvider>
  )
}

export default root
