import { createSignal } from 'solid-js'
import App from './App'
import Onboarding from './Onboarding'

const root = () => {
  const [getComponent, setComponent] = createSignal(<div>test</div>)

  const loggedIn = false
  loggedIn ? setComponent(App) : setComponent(Onboarding)

  return getComponent()
}

export default root
