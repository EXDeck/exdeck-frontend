// NOTE backend Api
const bApi = (() => {
  const url = `${import.meta.env.VITE_API_URL}`
  if (!url) throw Error('Environment variable "VITE_API_URL" is not set')
  const isHttps = `${import.meta.env.VITE_API_HTTPS}`.toLowerCase() === 'true'
  const urlHttps = `${import.meta.env.VITE_API_URL_HTTPS || ''}`
  if (isHttps && !urlHttps) throw Error('Environment variable "VITE_API_URL_HTTPS" is not set')
  return isHttps ? urlHttps : url
})()

// NOTE twitter Api
const tApi = 'https://api.twitter.com'

export const endpoints = {
  backend: {
    OAuthRequest: `${bApi}/oauthtoken`,
    authorize: `${bApi}/authorize`,
    getAccounts: `${bApi}/getaccounts`,
    logout: `${bApi}/logout`,
    logoutAll: `${bApi}/logoutall`,
    get: `${bApi}/get`,
  },
  twitter: {
    oauth: {
      authenticate: `${tApi}/oauth/authenticate`,
    },

    normal: {
      '1.1': {
        statuses: {
          homeTimeline: `${tApi}/1.1/statuses/home_timeline.json`,
        },
        search: {
          tweets: `${tApi}/1.1/search/tweets.json`,
        },
        users: {
          show: `${tApi}/1.1/users/show.json`,
        },
        application: {
          rateLimitStatus: `${tApi}/1.1/application/rate_limit_status.json`,
        },
      },
    },

    special: {
      '1.1': {
        search: {
          universal: `${tApi}/1.1/search/universal.json`,
        },
      },
    },
  },
}
