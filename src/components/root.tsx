import { createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Link, MetaProvider } from 'solid-meta'

import App from './App'
import Loading from './Common/Loading'

type ScreenState = 'loading' | 'onboarding' | 'app'

const screen = {
  loading: () => <Loading type="logo" />,
  onboarding: () => <div>Onboarding</div>,
  app: () => <App />,
}

const root = () => {
  const [getScreenState, setScreenState] = createSignal<ScreenState>('loading')

  setTimeout(() => setScreenState('app'), 1000)

  return (
    <MetaProvider>
      <Link rel="stylesheet" href={`/themes/${'harmony.min.css'}`} />
      <Dynamic component={screen[getScreenState()]} />
    </MetaProvider>
  )
}

export default root
