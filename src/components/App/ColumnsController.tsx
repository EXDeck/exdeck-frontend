import { Component, createSignal, Index } from 'solid-js'

import Btn from '../Common/Btn'
import Icon from '../Common/Icon'

const ColumnsController: Component = () => {
  const [getTestArr] = createSignal([, , ,])
  return (
    <div class="columns-controller">
      <ol>
        <Index each={getTestArr()}>
          {(v, i) => (
            <li>
              <Btn onClick={() => {}}>{i}</Btn>
            </li>
          )}
        </Index>
      </ol>
      <Btn type="mask" onClick={() => {}}>
        <Icon>add</Icon>
      </Btn>
    </div>
  )
}

export default ColumnsController
