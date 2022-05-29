import { Component, createSignal, Show } from 'solid-js'

import Btn from '../Common/Btn'

import { authorize } from './OauthInterface.script'

interface Props {
  url: string
  oauthToken: string
}

const OauthInterface: Component<Props> = (props) => {
  const [getShowInputPin, setShowInputPin] = createSignal(false)
  const [getPin, setPin] = createSignal('')
  return (
    <div>
      <p>{props.oauthToken}</p>
      <a href={props.url} target="_blank" onClick={() => setShowInputPin(true)}>
        {props.url}
      </a>
      <Show when={getShowInputPin()}>
        <input
          type="text"
          placeholder="pin..."
          style="border: 1px solid"
          onInput={(e) => setPin(e.currentTarget.value)}
        />
        <Btn
          disabled={!getPin()}
          onClick={async () => {
            await authorize({ oauth_token: props.oauthToken, pin: getPin() })
            const url = new URL(location.href)
            url.searchParams.delete('login')
            location.href = url.href
          }}
        >
          Authorize
        </Btn>
      </Show>
    </div>
  )
}

export default OauthInterface
