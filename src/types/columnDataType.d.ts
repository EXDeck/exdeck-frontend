import { Errors } from './twitter.d'
import type { SpecialStatus } from '@/types/twitter'

export interface StatusesWithID {
  [accountID: string]: SpecialStatus[]
}

export interface ErrorsWithID {
  [accountID: string]: Errors
}

export interface TwitterOptionsWithID {
  [accountID: string]: object
}

export type StatusWithID = [accountID: string, Status: SpecialStatus]
