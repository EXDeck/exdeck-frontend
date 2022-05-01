import { Status, MediaEntity } from 'twitter-d'

export interface SpecialStatus extends Status {
  quote_count?: number
  reply_count?: number
}

export interface MediaEntityExtend extends MediaEntity {
  ext_alt_text?: string
}
