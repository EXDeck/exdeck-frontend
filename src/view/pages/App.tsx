import { Component, createSignal } from 'solid-js'

import { Box } from '../components/layout/Box'

export const App: Component = () => {
  const [getClassList, setClassList] = createSignal('test1')
  setInterval(() => {
    getClassList() === 'test1' ? setClassList('test2') : setClassList('test1')
  }, 1000)
  return <Box></Box>
}
