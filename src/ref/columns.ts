import { endpointsRef } from './endpoints'
import { post } from '@/scripts/fetch'
import { getAccountFromStore } from '@/scripts/store'
import type {
  StatusesWithID,
  TwitterOptionsWithID,
} from '@/types/columnDataType'
import type { ColumnOptions } from '@/types/columnOptionTypes.d'

interface columnsRefType {
  [columnId: string]: {
    options: ColumnOptions
    updateFunc(
      options: ColumnOptions,
      twitterOptions: TwitterOptionsWithID
    ): Promise<StatusesWithID>
  }
}

export const columnIconNameRef = {
  home: 'home',
}

export const columnsRef: columnsRefType = {
  home: {
    options: {
      common: {
        name: 'Home',
        accounts: [],
        autoUpdate: true,
        autoUpdateFreq: 60000,
      },
    },
    async updateFunc(
      { common }: ColumnOptions,
      twitterOptions: TwitterOptionsWithID = {}
    ): Promise<StatusesWithID> {
      const result = {}
      for (const id of common.accounts) {
        try {
          if (await getAccountFromStore(id)) {
            const resJson = await post(endpointsRef.backend.get, {
              body: JSON.stringify({
                url: endpointsRef.twitter.normal['1.1'].statuses.homeTimeline,
                id,
                twitter: {
                  tweet_mode: 'extended',
                  ...twitterOptions[id],
                },
              }),
            }).then((res) => res.json())
            result[id] = resJson
          } else {
            console.log(`${id} is not logged in`)
          }
        } catch (error) {
          //
        }
      }
      return result
    },
  },
}
