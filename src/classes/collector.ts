import { randomUUID } from 'crypto'

export interface CollectorConfig {
  name: string
}

export class Collector {
  private id: string
  private name: string

  constructor(config: CollectorConfig) {
    this.id = randomUUID()
    this.name = config.name || ''
  }

  get getId() {
    return this.id
  }

  get getName() {
    return this.name
  }

  set setName(name: string) {
    this.name = name
  }
}
