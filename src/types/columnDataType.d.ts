import { Errors } from './twitter.d'

import type { SpecialStatus } from '@/types/twitter'

export interface StatusesWithId {
  [accountID: string]: SpecialStatus[]
}

export interface ErrorsWithId {
  [accountID: string]: Errors
}

export interface TwitterOptionsWithId {
  [accountID: string]: object
}

export type StatusWithId = [accountId: string, Status: SpecialStatus]
