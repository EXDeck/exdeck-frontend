import { Component, createResource, Match, Switch } from "solid-js"

import Main from "./pages/Main"
import Welcome from "./pages/Welcome"
import { auth } from "./scripts/backendApi"

import "./base.scss"
import "destyle.css"

const App: Component = () => 
{
	const [status] = createResource(auth.getAuthStatus)

	// const [getIsLogIn] = createSignal(false)
	return (
		<Switch fallback={<Welcome />}>
			<Match when={status.loading}>
				<span>Loading...</span>
			</Match>
			<Match when={status()?.signIn}>
				<Main />
			</Match>
		</Switch>
	)
}

export default App
