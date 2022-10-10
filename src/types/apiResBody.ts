export interface OauthRequestTokenRes {
  oauthToken: string;
  oauthTokenSecret: string;
}

export interface AuthStatusRes {
  signIn: boolean;
  specialKey: boolean;
}
