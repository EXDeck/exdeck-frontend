import { Component, mergeProps } from 'solid-js'

interface Props {
  message: string
}

const StartupError: Component<Props> = (props) => {
  props = mergeProps({ type: 'circle' }, props)
  return (
    <main id="startup-error">
      <h1>Sorry. Failed to start.</h1>
      <p>{props.message}</p>
    </main>
  )
}

export default StartupError
