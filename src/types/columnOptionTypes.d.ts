export interface ColumnOptions {
  common: {
    accounts: string[]
    autoUpdate: boolean
    autoUpdateFreq: number
    name: string
  }
}

export interface ColumnUpdateOptions {
  resetItems?: boolean
}
