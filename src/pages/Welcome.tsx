import { Switch, Match, createResource, createSignal, createEffect } from "solid-js"

import { auth } from "@/scripts/backendApi"
import { createOauthLink } from "@/scripts/twitterUtil"

import type { Component } from "solid-js"

const Welcome: Component = () => 
{
	const [getPin, setPin] = createSignal("")

	const [tokens] = createResource(() => auth.getAuthTokens())
	const [getOauthToken, setOauthToken] = createSignal("")

	createEffect(() => 
	{
		const tmpTokens = tokens()
		if (!tmpTokens) return
		const { oauthToken } = tmpTokens
		setOauthToken(oauthToken)
	})

	return (
		<div>
			<Switch>
				<Match when={tokens.loading}>
					<p>loading...</p>
				</Match>
				<Match when={!(tokens.loading && tokens.error)}>
					<p>
						<a href={createOauthLink(getOauthToken())} target="_blank" rel="noopener">
							{createOauthLink(getOauthToken())}
						</a>
					</p>
				</Match>
			</Switch>
			<p>
				<input
					onInput={event => 
					{
						setPin(event.currentTarget.value)
					}}
					type="text"
					style={{ border: "1px solid" }}
				/>
				<button
					onClick={async () => 
					{
						await auth.postAuthRequest(getOauthToken(), getPin())
						window.location.reload()
					}}
				>
          submit
				</button>
			</p>
		</div>
	)
}

export default Welcome
