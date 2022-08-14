import { Component, createResource, createSignal, Match, Switch } from 'solid-js'

import { getOauthLink } from '@/bridge/interface'

export const Onboarding: Component = () => {
  const [getDummySignal] = createSignal(0)
  const [url] = createResource(getDummySignal, getOauthLink)
  return (
    <Switch>
      <Match when={url.loading}>
        <p>loading...</p>
      </Match>
      <Match when={!(url.loading && url.error)}>
        <a href={url()} target="_blank" rel="noopener">
          {url()}
        </a>
      </Match>
    </Switch>
  )
}
