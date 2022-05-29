import { Component, mergeProps } from 'solid-js'

import { eq, when } from '@/scripts/util'

interface Props {
  type: 'circle' | 'logo' | string
}

const Loading: Component<Props> = (props) => {
  props = mergeProps({ type: 'circle' }, props)
  return (
    <div class="loading">
      {when(props.type)
        .on(eq('circle'), () => <div>loading</div>)
        .on(eq('logo'), () => <img src="/img/logo/logo_full.svg" class="logo" alt="EXDeck" />)
        .otherwise(() => (
          <div>loading</div>
        ))}
    </div>
  )
}

export default Loading
