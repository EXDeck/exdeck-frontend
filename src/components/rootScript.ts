import { api } from '@/scripts/api'
import type { Account } from '@/types/data/account'
import { endpoints } from '@/refs/endpoints'
import { backendGet } from '@/scripts/util'
import { setAccounts } from '@/scripts/store'

const param = new URL(location.href).searchParams
const login = param.get('login')

const loggedPromise = api.getAccounts()
loggedPromise
  .then(async (res) => {
    if (!(Array.isArray(res) && res.length)) return false
    const tempAccounts: Promise<Account[]> = Promise.all(
      res.map(async (id) => {
        return {
          id,
          specialKey: await api.isSpecialKeys(id),
          fullUser: await backendGet({
            url: endpoints.twitter.normal['1.1'].users.show,
            id,
            twitter: {
              user_id: id,
            },
          }).then((res) => res.json()),
        }
      }),
    )
    setAccounts(tempAccounts)
    console.log(await tempAccounts)
    return true
  })
  .catch(() => {
    return false
  })

export { login, loggedPromise }
