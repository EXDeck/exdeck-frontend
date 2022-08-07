import { JSX, JSXElement, mergeProps, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

interface BoxProps<T extends keyof HTMLElementTagNameMap> extends JSX.HTMLAttributes<T> {
  children?: any
  component?: T
  container?: boolean
}

export const Box = <T extends keyof HTMLElementTagNameMap>(props: BoxProps<T>): JSXElement => {
  const [split, other] = splitProps(props, ['classList', 'container'])
  const mergedOther = mergeProps({ component: 'div' }, other)
  return (
    <Dynamic
      {...mergedOther}
      classList={{ ...{ box: true, container: split.container }, ...split.classList }}
    />
  )
}
