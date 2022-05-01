import { Component, JSX, mergeProps } from 'solid-js'

interface Props {
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>
  icon?: boolean
}

const Btn: Component<Props> = (props) => {
  props = mergeProps({ icon: false }, props)
  return (
    <button class="btn" onClick={props.onClick}>
      {props.icon ? <i>{props.children}</i> : props.children}
    </button>
  )
}

export default Btn
