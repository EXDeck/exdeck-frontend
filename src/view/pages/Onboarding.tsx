import { Component, createResource, createSignal, Match, Switch } from 'solid-js'

import { getOauthLink, requestOauth } from '@/bridge/interface'

export const Onboarding: Component = () => {
  const [getDummySignal] = createSignal(0)
  const [getPin, setPin] = createSignal('')
  const [url] = createResource(getDummySignal, getOauthLink)
  return (
    <div>
      <Switch>
        <Match when={url.loading}>
          <p>loading...</p>
        </Match>
        <Match when={!(url.loading && url.error)}>
          <p>
            <a href={url()} target="_blank" rel="noopener">
              {url()}
            </a>
          </p>
        </Match>
      </Switch>
      <p>
        <input
          onInput={(e) => {
            setPin(e.currentTarget.value)
          }}
          type="text"
          style={{ border: '1px solid' }}
        />
        <button
          onClick={() => {
            requestOauth(getPin())
          }}
        >
          submit
        </button>
      </p>
    </div>
  )
}
