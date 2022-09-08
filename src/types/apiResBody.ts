export interface OauthRequestTokenRes {
  oauth_token: string
  oauth_token_secret: string
}

export interface AuthStatusRes {
  signIn: boolean
  specialKey: boolean
}
