export interface StreamerOptions {
  common: {
    accounts: string[]
    autoUpdate: boolean
    autoUpdateFreq: number
    name: string
  }
}

export interface TwitterOptionsWithId {
  [accountID: string]: object
}

export interface StatusesWithId {
  [accountID: string]: unknown[]
}

export class Streamer {
  updater: (streamerOptions: StreamerOptions, twitterOptions: TwitterOptionsWithId) => Promise<StatusesWithID>
  constructor() {}
}
