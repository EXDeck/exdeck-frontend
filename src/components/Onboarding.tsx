import { createSignal, Match, Switch } from 'solid-js'
import { Transition } from 'solid-transition-group'

import { transitionFade } from '../ref/transitionName'

import Loading from './Common/Loading'
import { sendOauthRequest } from './Onboarding.script'
import OauthInterface from './Onboarding/OauthInterface'

type OauthState = 'requesting' | 'error' | 'complete'

const Onboarding = () => {
  const [getOauthState, setOauthState] = createSignal<OauthState>('requesting')
  const [getUrl, setUrl] = createSignal('')
  const [getOauthToken, setOauthToken] = createSignal('')
  const [getErrorMessage, setErrorMessage] = createSignal('')

  sendOauthRequest()
    .then(({ url, oauth_token: oauthToken }) => {
      setUrl(url)
      setOauthToken(oauthToken)
      setOauthState('complete')
    })
    .catch((err: Error) => {
      setErrorMessage(err.message)
      setOauthState('error')
    })
  return (
    <div id="onboarding">
      <Transition name={transitionFade}>
        <Switch>
          <Match when={getOauthState() === 'requesting'} children={<Loading type="logo" />} />
          <Match
            when={getOauthState() === 'complete'}
            children={<OauthInterface url={getUrl()} oauthToken={getOauthToken()} />}
          />
          <Match when={getOauthState() === 'error'} children={<div>{getErrorMessage()}</div>} />
        </Switch>
      </Transition>
    </div>
  )
}

export default Onboarding
