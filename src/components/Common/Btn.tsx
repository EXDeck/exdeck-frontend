import { Component, mergeProps } from 'solid-js'

interface Props {
  onClick: Function
  type?: '' | 'primary' | 'mask'
  disabled?: boolean
}

const defaultProps = { type: 'normal', disabled: false }

const Btn: Component<Props> = (props) => {
  props = mergeProps(defaultProps, props)
  return (
    <button
      classList={{
        btn: true,
        [props.type || '']: true,
      }}
      onClick={() => props.onClick()}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Btn
