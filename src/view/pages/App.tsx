import { Component, For } from 'solid-js'

import { Box } from '../components/layout/Box'
import { Column } from '../components/section/Column'
import { SerializableColumnData } from '../types/SerializableColumnData'

import type { Status } from 'twitter-d'

export const App: Component = () => {
  const dummyColumnList: SerializableColumnData<Status>[] = new Array(5).fill('').map(() => ({
    type: 'twitter-timeline',
    name: 'Home',
    itemList: new Array(20).fill('').map(() => ({
      created_at: 'Sun Aug 07 13:28:35 +0000 2022',
      id: 1556271084915216400,
      id_str: '1556271084915216384',
      full_text: 'テスト',
      truncated: false,
      display_text_range: [0, 3],
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
      },
      source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 1105445755056078800,
        id_str: '1105445755056078848',
        name: 'すえ (hakunagi (LG Electronics Bot))',
        screen_name: 'ElectronicsBot',
        location: 'MarinDeck',
        description: 'スマホオタクだったりスマホ音ゲーマーだったりMarinDeckの開発メンバーだったり',
        url: 'https://t.co/FZhwop8F3Q',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/FZhwop8F3Q',
                expanded_url: 'https://youtu.be/Dh79Lk_wCD4',
                display_url: 'youtu.be/Dh79Lk_wCD4',
                indices: [0, 23],
              },
            ],
          },
          description: {
            urls: [],
          },
        },
        protected: false,
        followers_count: 1140,
        friends_count: 1095,
        listed_count: 15,
        created_at: 'Tue Mar 12 12:29:40 +0000 2019',
        favourites_count: 25208,
        verified: false,
        statuses_count: 46950,
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1549530842975809536/8DCCdz8Y_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/1105445755056078848/1658027749',
        default_profile: false,
        default_profile_image: false,
        withheld_in_countries: [],
      },
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'ja',
    })),
  }))

  console.log(dummyColumnList)

  return (
    <Box id="app">
      <h1>EXDeck</h1>
      <Box component="nav">
        <h2>仮置きナビゲーション</h2>
      </Box>
      <Box component="section" class="column-list">
        <h2>仮置きセクション</h2>
        <For each={dummyColumnList}>{(column) => <Column column={column} />}</For>
      </Box>
    </Box>
  )
}
