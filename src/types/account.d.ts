import type { FullUser } from 'twitter-d'

export interface Account {
  fullUser: FullUser
  id: string
  specialKey: boolean
}
