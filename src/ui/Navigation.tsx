import Box from "../components/Box"

import type { Component } from "solid-js"

interface Props {
  direction: "vertical" | "horizontal";
}

const Navigation: Component<Props> = props =>
{
	return (
		<Box
			classList={{
				"exd-ui-navigation": true,
			}}
			data-direction={props.direction}
		>
      Navigation({props.direction})
		</Box>
	)
}

export default Navigation
