import { createSignal } from 'solid-js'

import { Account } from '@/types/account'

export const [getGlobalAccounts, setGlobalAccounts] = createSignal<Account[]>([])
