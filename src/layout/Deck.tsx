import Box from "@/components/Box"
import Navigation from "@/ui/Navigation"

import type { Component } from "solid-js"

import "./Deck.scss"

const Deck: Component = () =>
{
	return (
		<Box class="exd-ui-deck">
			<Navigation direction="vertical" />
			<Box>Columns</Box>
		</Box>
	)
}

export default Deck
