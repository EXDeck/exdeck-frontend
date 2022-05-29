import { createSignal, Match, Switch } from 'solid-js'

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
      console.log(url)

      setUrl(url)
      setOauthToken(oauthToken)
      setOauthState('complete')
    })
    .catch((err: Error) => {
      setErrorMessage(err.message)
      setOauthState('error')
    })
  return (
    <div>
      <Switch>
        <Match when={getOauthState() === 'requesting'} children={<div>Requesting...</div>} />
        <Match
          when={getOauthState() === 'complete'}
          children={<OauthInterface url={getUrl()} oauthToken={getOauthToken()} />}
        />
        <Match when={getOauthState() === 'error'} children={<div>{getErrorMessage()}</div>} />
      </Switch>
    </div>
  )
}

export default Onboarding
