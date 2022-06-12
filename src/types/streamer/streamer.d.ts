import { SpecialStatus } from '../twitter'

export interface StatusWithId {
  accountId: string
  status: SpecialStatus
}

export interface StreamerConfigs {
  accountIds: string[]
  autoUpdate: {
    run: boolean
    freq: number
    specialFreq: number
  }
}
