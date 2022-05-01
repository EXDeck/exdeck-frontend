import { Component, mergeProps } from 'solid-js'

interface Props {
  type: 'circle' | 'logo'
}

const Loading: Component<Props> = (props) => {
  props = mergeProps({ type: 'circle' }, props)
  return <div>Loading ({props.type})</div>
}

export default Loading
