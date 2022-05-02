import type { Component } from 'solid-js'

interface Props {
  inline?: boolean
}

const Icon: Component<Props> = (props) => {
  if (props.inline) {
    return (
      <span class="icon" role="img">
        {props.children}
      </span>
    )
  }
  return (
    <div class="icon" role="img">
      {props.children}
    </div>
  )
}

export default Icon
