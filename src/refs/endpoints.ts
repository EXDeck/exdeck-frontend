const url = import.meta.env.VITE_API_URL || ''

export const endpoints = {
  backend: {
    OAuthRequest: `${url}/oauthtoken`,
    authorize: `${url}/authorize`,
    getAccounts: `${url}/getaccounts`,
    logout: `${url}/logout`,
    logoutAll: `${url}/logoutall`,
    get: `${url}/get`,
  },
  twitter: {
    oauth: {
      authenticate: `https://api.twitter.com/oauth/authenticate`,
    },

    normal: {
      '1.1': {
        statuses: {
          homeTimeline: `https://api.twitter.com/1.1/statuses/home_timeline.json`,
        },
        search: {
          tweets: `https://api.twitter.com/1.1/search/tweets.json`,
        },
        users: {
          show: `https://api.twitter.com/1.1/users/show.json`,
        },
        application: {
          rateLimitStatus: `https://api.twitter.com/1.1/application/rate_limit_status.json`,
        },
      },
    },

    special: {
      '1.1': {
        search: {
          universal: `https://api.twitter.com/1.1/search/universal.json`,
        },
      },
    },
  },
}
