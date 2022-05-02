import { Component, createEffect, createSignal, mergeProps, splitProps } from 'solid-js'

interface Props {
  onClick: Function
  type?: '' | 'primary' | 'mask'
}

type ClassList = {
  [className: string]: boolean
}

const Btn: Component<Props> = (props) => {
  const [getBtnClassList, setBtnClassList] = createSignal<ClassList>({
    btn: true,
  })
  props = mergeProps({ type: 'normal' }, props)
  const [local] = splitProps(props, ['type', 'children', 'onClick'])
  createEffect(() => {
    setBtnClassList({
      btn: true,
      [local.type || 'btn']: true,
    })
  })
  return (
    <button classList={getBtnClassList()} onClick={() => local.onClick()}>
      {local.children}
    </button>
  )
}

export default Btn
