import { createSignal } from 'solid-js'

import { StatusWithId, StreamerConfigs } from '@/types/streamer/streamer'

export class Streamer {
  items = createSignal<StatusWithId[]>([])
  streamerConfigs = createSignal<StreamerConfigs>()
}
