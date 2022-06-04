import { createSignal, Match, Switch } from 'solid-js'
import { Link, MetaProvider } from 'solid-meta'
import { Transition } from 'solid-transition-group'

import App from './App'
import Loading from './Common/Loading'
import Onboarding from './Onboarding'
import { getAccountsList } from './root.script'
import StartupError from './StartupError'

import { setGlobalAccounts } from '@/scripts/globalSignals'

type ScreenState = 'loading' | 'error' | 'onboarding' | 'app'

const root = () => {
  const [getErrorMessage, setErrorMessage] = createSignal('')
  const [getScreenState, setScreenState] = createSignal<ScreenState>('loading')

  const forceOnboarding = !!new URL(location.href).searchParams.get('login')

  if (forceOnboarding) setScreenState('onboarding')
  else
    getAccountsList()
      .then((accounts) => {
        if (accounts.length) {
          setGlobalAccounts(accounts)
          setScreenState('app')
        } else setScreenState('onboarding')
      })
      .catch((error: Error) => {
        setErrorMessage(error.message)
        setScreenState('error')
      })

  return (
    <MetaProvider>
      <Link rel="stylesheet" href={`/themes/${'harmony.min.css'}`} />
      <Transition name="transition-fade">
        <Switch fallback={<StartupError message="ScreenState is invalid." />}>
          {/* loading */}
          <Match when={getScreenState() === 'loading'} children={<Loading type="logo" />} />
          {/* StartupError */}
          <Match
            when={getScreenState() === 'error'}
            children={<StartupError message={getErrorMessage()} />}
          />
          {/* Onboarding */}
          <Match when={getScreenState() === 'onboarding'} children={<Onboarding />} />
          {/* App */}
          <Match when={getScreenState() === 'app'} children={<App />} />
        </Switch>
      </Transition>
    </MetaProvider>
  )
}

export default root
