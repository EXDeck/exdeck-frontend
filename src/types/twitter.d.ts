import type { MediaEntity, Status } from 'twitter-d'

export interface SpecialStatus extends Status {
  quote_count?: number
  reply_count?: number
}

export interface MediaEntityExtend extends MediaEntity {
  ext_alt_text?: string
}

export interface Errors {
  errors: {
    code: number
    message: string
  }
}

export interface RateLimit {
  limit: number
  remaining: number
  reset: number
}

export interface RateLimitStatus {
  rate_limit_context: {
    access_token: string
  }

  resources: {
    account: {
      '/account/authenticate_web_view': RateLimit
      '/account/backup_code': RateLimit
      '/account/change_password': RateLimit
      '/account/login_verification/remove_method': RateLimit
      '/account/login_verification_enrollment': RateLimit
      '/account/login_verification_enrollment_v2': RateLimit
      '/account/login_verification_request': RateLimit
      '/account/multi/add': RateLimit
      '/account/multi/list': RateLimit
      '/account/multi/logout_all': RateLimit
      '/account/multi/switch': RateLimit
      '/account/personalization/app_graph': RateLimit
      '/account/personalization/appgraph/optout_status': RateLimit
      '/account/personalization/download_advertiser_list': RateLimit
      '/account/personalization/download_your_data': RateLimit
      '/account/personalization/p13n_data': RateLimit
      '/account/personalization/p13n_preferences': RateLimit
      '/account/personalization/partner_interests': RateLimit
      '/account/personalization/set_optout_cookies': RateLimit
      '/account/personalization/twitter_interests': RateLimit
      '/account/settings': RateLimit
      '/account/update_profile': RateLimit
      '/account/verification': RateLimit
      '/account/verify_credentials': RateLimit
      '/account/verify_password': RateLimit
    }
    account_activity: {
      '/account_activity/all/:instance_name/subscriptions': RateLimit
      '/account_activity/all/:instance_name/webhooks': RateLimit
      '/account_activity/all/webhooks': RateLimit
      '/account_activity/direct_messages/:instance_name/subscriptions': RateLimit
      '/account_activity/direct_messages/:instance_name/webhooks': RateLimit
      '/account_activity/direct_messages/webhooks': RateLimit
      '/account_activity/webhooks': RateLimit
      '/account_activity/webhooks/:id/subscriptions': RateLimit
      '/account_activity/webhooks/:id/subscriptions/all': RateLimit
      '/account_activity/webhooks/:id/subscriptions/all/list': RateLimit
      '/account_activity/webhooks/:id/subscriptions/direct_messages': RateLimit
      '/account_activity/webhooks/:id/subscriptions/direct_messages/list': RateLimit
    }
    activity: {
      '/activity/about_me': RateLimit
      '/activity/about_me/unread': RateLimit
      '/activity/by_friends': RateLimit
      '/activity/ds': RateLimit
    }
    adaptive: {
      '/adaptive': RateLimit
    }
    admin_users: {
      '/admin_users': RateLimit
    }
    ads: {
      '/ads/campaigns/account_permissions': RateLimit
    }
    alerts: {
      '/alerts/landing_page': RateLimit
    }
    amplify: {
      '/amplify/categories': RateLimit
      '/amplify/marketplace/defaults': RateLimit
      '/amplify/marketplace/videos': RateLimit
    }
    application: {
      '/application/rate_limit_status': RateLimit
    }
    auth: {
      '/auth/csrf_token': RateLimit
    }
    badge_count: {
      '/badge_count/badge_count': RateLimit
    }
    beta: {
      '/beta/timelines/custom/list': RateLimit
      '/beta/timelines/custom/show': RateLimit
      '/beta/timelines/custom/whitelisted': RateLimit
      '/beta/timelines/timeline': RateLimit
    }
    blocks: {
      '/blocks/exists': RateLimit
      '/blocks/ids': RateLimit
      '/blocks/list': RateLimit
    }
    bookmark: {
      '/bookmark/entries/add&POST': RateLimit
      '/bookmark/entries/remove&POST': RateLimit
    }
    bouncer: {
      '/bouncer/opt_in': RateLimit
    }
    broadcasts: {
      '/broadcasts/show': RateLimit
    }
    business_experience: {
      '/business_experience/analytics/account': RateLimit
      '/business_experience/analytics/tweets': RateLimit
      '/business_experience/dashboard_features': RateLimit
      '/business_experience/dashboard_settings/destroy': RateLimit
      '/business_experience/dashboard_settings/show': RateLimit
      '/business_experience/dashboard_settings/update': RateLimit
      '/business_experience/inbox/interactions': RateLimit
      '/business_experience/inbox/show': RateLimit
      '/business_experience/keywords': RateLimit
      '/business_experience/twitter_pro_settings/destroy': RateLimit
      '/business_experience/twitter_pro_settings/show': RateLimit
      '/business_experience/twitter_pro_settings/update': RateLimit
      '/business_experience/user_features': RateLimit
    }
    business_profiles: {
      '/business_profiles/show': RateLimit
      '/business_profiles/update': RateLimit
    }
    collections: {
      '/collections/entries': RateLimit
      '/collections/list': RateLimit
      '/collections/show': RateLimit
    }
    commerce: {
      '/commerce/addresses': RateLimit
      '/commerce/payment_methods': RateLimit
      '/commerce/products': RateLimit
      '/commerce/profiles': RateLimit
      '/commerce/user_profiles': RateLimit
    }
    communities: {
      '/communities/1/communities/create': RateLimit
      '/communities/1/communities/show': RateLimit
      '/communities/1/community/:id/join': RateLimit
      '/communities/1/community/:id/leave': RateLimit
      '/communities/1/community/:id/members': RateLimit
      '/communities/1/community/:id/show': RateLimit
      '/communities/1/community/:id/timeline': RateLimit
    }
    compliance: {
      '/compliance/jobs&GET': RateLimit
      '/compliance/jobs&POST': RateLimit
      '/compliance/jobs/:job_id': RateLimit
    }
    contacts: {
      '/contacts/addressbook': RateLimit
      '/contacts/delete/status': RateLimit
      '/contacts/upload_and_match': RateLimit
      '/contacts/uploaded_by': RateLimit
      '/contacts/users': RateLimit
      '/contacts/users_and_uploaded_by': RateLimit
    }
    content: {
      '/content/recommendations': RateLimit
    }
    conversation: {
      '/conversation/hide': RateLimit
      '/conversation/show/:id': RateLimit
      '/conversation/unhide': RateLimit
    }
    custom_profiles: {
      '/custom_profiles/list': RateLimit
      '/custom_profiles/show': RateLimit
    }
    device: {
      '/device/install_referrer': RateLimit
      '/device/operator_signup_info': RateLimit
      '/device/register': RateLimit
      '/device/sms_verify_begin': RateLimit
      '/device/token': RateLimit
    }
    device_following: {
      '/device_following/ids': RateLimit
      '/device_following/list': RateLimit
    }
    direct_messages: {
      '/direct_messages': RateLimit
      '/direct_messages/broadcasts/list': RateLimit
      '/direct_messages/broadcasts/show': RateLimit
      '/direct_messages/broadcasts/statuses/list': RateLimit
      '/direct_messages/broadcasts/statuses/show': RateLimit
      '/direct_messages/events/list': RateLimit
      '/direct_messages/events/show': RateLimit
      '/direct_messages/mark_read': RateLimit
      '/direct_messages/sent': RateLimit
      '/direct_messages/sent_and_received': RateLimit
      '/direct_messages/show': RateLimit
      '/direct_messages/subscribers/ids': RateLimit
      '/direct_messages/subscribers/lists/list': RateLimit
      '/direct_messages/subscribers/lists/members/ids': RateLimit
      '/direct_messages/subscribers/lists/members/show': RateLimit
      '/direct_messages/subscribers/lists/show': RateLimit
      '/direct_messages/subscribers/show': RateLimit
    }
    discover: {
      '/discover/highlight': RateLimit
      '/discover/home': RateLimit
      '/discover/nearby': RateLimit
      '/discover/universal': RateLimit
    }
    dm: {
      '/dm/conversation/:id': RateLimit
      '/dm/conversation/:id/metadata': RateLimit
      '/dm/destroy': RateLimit
      '/dm/inbox_initial_state': RateLimit
      '/dm/inbox_timeline/:Id': RateLimit
      '/dm/permissions': RateLimit
      '/dm/permissions/secret': RateLimit
      '/dm/requests': RateLimit
      '/dm/top_requests': RateLimit
      '/dm/unread_count': RateLimit
      '/dm/user_inbox': RateLimit
      '/dm/user_updates': RateLimit
    }
    drafts: {
      '/drafts/statuses/create': RateLimit
      '/drafts/statuses/destroy': RateLimit
      '/drafts/statuses/ids': RateLimit
      '/drafts/statuses/list': RateLimit
      '/drafts/statuses/show': RateLimit
      '/drafts/statuses/update': RateLimit
    }
    explore: {
      '/explore/tiles': RateLimit
    }
    favorite_users: {
      '/favorite_users/ids': RateLimit
      '/favorite_users/list': RateLimit
    }
    favorites: {
      '/favorites/list': RateLimit
    }
    feedback: {
      '/feedback/events': RateLimit
      '/feedback/show/:id': RateLimit
    }
    fleets: {
      '/fleets/:version/avatar_content': RateLimit
      '/fleets/:version/create': RateLimit
      '/fleets/:version/delete': RateLimit
      '/fleets/:version/feedback/create': RateLimit
      '/fleets/:version/fleet_threads': RateLimit
      '/fleets/:version/fleetline': RateLimit
      '/fleets/:version/home_timeline': RateLimit
      '/fleets/:version/mark_read': RateLimit
      '/fleets/:version/mutes/create': RateLimit
      '/fleets/:version/mutes/destroy': RateLimit
      '/fleets/:version/mutes/list': RateLimit
      '/fleets/:version/track_events': RateLimit
      '/fleets/:version/update': RateLimit
      '/fleets/:version/user_fleets': RateLimit
      '/fleets/:version/viewers': RateLimit
    }
    follow_search: {
      '/follow_search/show': RateLimit
    }
    followers: {
      '/followers/ids': RateLimit
      '/followers/list': RateLimit
      '/followers/vit/ids': RateLimit
      '/followers/vit/list': RateLimit
    }
    foundmedia: {
      '/foundmedia/categories': RateLimit
      '/foundmedia/categories/:category': RateLimit
      '/foundmedia/search': RateLimit
    }
    friends: {
      '/friends/following/ids': RateLimit
      '/friends/following/list': RateLimit
      '/friends/ids': RateLimit
      '/friends/list': RateLimit
      '/friends/vit/ids': RateLimit
      '/friends/vit/list': RateLimit
    }
    friendships: {
      '/friendships/create': RateLimit
      '/friendships/incoming': RateLimit
      '/friendships/list': RateLimit
      '/friendships/lookup': RateLimit
      '/friendships/no_retweets/ids': RateLimit
      '/friendships/outgoing': RateLimit
      '/friendships/show': RateLimit
    }
    geo: {
      '/geo/id/:place_id': RateLimit
      '/geo/place_page': RateLimit
      '/geo/places': RateLimit
      '/geo/reverse_geocode': RateLimit
      '/geo/search': RateLimit
      '/geo/similar_places': RateLimit
    }
    graph: {
      '/graph/app/optout/status': RateLimit
    }
    graphql: {
      '/graphql': RateLimit
    }
    'graphql&POST': {
      '/graphql&POST': RateLimit
    }
    guide: {
      '/guide': RateLimit
      '/guide/explore_locations_with_autocomplete': RateLimit
      '/guide/get_explore_locations': RateLimit
      '/guide/get_explore_settings': RateLimit
      '/guide/topic': RateLimit
    }
    help: {
      '/help/configuration': RateLimit
      '/help/experiments': RateLimit
      '/help/languages': RateLimit
      '/help/privacy': RateLimit
      '/help/settings': RateLimit
      '/help/tos': RateLimit
    }
    i: {
      '/i/config': RateLimit
      '/i/tfb/v1/smb/web/:account_id/payment/save': RateLimit
    }
    interests: {
      '/interests/suggestions': RateLimit
    }
    keyregistry: {
      '/keyregistry/delete&DELETE': RateLimit
      '/keyregistry/extract_prekey_bundle/:user_id&POST': RateLimit
      '/keyregistry/publish&POST': RateLimit
      '/keyregistry/register&POST': RateLimit
    }
    labs: {
      '/labs/2/platform_manipulation/reports': RateLimit
      '/labs/2/reports': RateLimit
      '/labs/:version/tweets/*': RateLimit
      '/labs/:version/tweets/:id/hidden&PUT': RateLimit
      '/labs/:version/tweets/metrics/private': RateLimit
      '/labs/:version/tweets/search': RateLimit
      '/labs/:version/tweets/stream/compliance': RateLimit
      '/labs/:version/tweets/stream/filter/': RateLimit
      '/labs/:version/tweets/stream/filter/:instance_name': RateLimit
      '/labs/:version/tweets/stream/filter/rules&POST': RateLimit
      '/labs/:version/tweets/stream/filter/rules/': RateLimit
      '/labs/:version/tweets/stream/filter/rules/:instance_name': RateLimit
      '/labs/:version/tweets/stream/sample': RateLimit
      '/labs/:version/users/*': RateLimit
      '/labs/:version/users/:id/tweets': RateLimit
      '/labs/:version/users/by/username/:handle/tweets': RateLimit
    }
    limiter_scalding_report_creation: {
      '/limiter_scalding_report_creation': RateLimit
    }
    lists: {
      '/lists/:id&DELETE': RateLimit
      '/lists/:id&GET': RateLimit
      '/lists/:id&PUT': RateLimit
      '/lists/:id/followers&GET': RateLimit
      '/lists/:id/members&GET': RateLimit
      '/lists/:id/members&POST': RateLimit
      '/lists/:id/members/:user_id&DELETE': RateLimit
      '/lists/:id/tweets&GET': RateLimit
      '/lists/list': RateLimit
      '/lists/members': RateLimit
      '/lists/members/show': RateLimit
      '/lists/memberships': RateLimit
      '/lists/ownerships': RateLimit
      '/lists/show': RateLimit
      '/lists/statuses': RateLimit
      '/lists/subscribers': RateLimit
      '/lists/subscribers/show': RateLimit
      '/lists/subscriptions': RateLimit
    }
    'lists&POST': {
      '/lists&POST': RateLimit
    }
    live_event: {
      '/live_event/1/:id/timeline': RateLimit
      '/live_event/timeline/:id': RateLimit
    }
    live_pipeline: {
      '/live_pipeline/events': RateLimit
    }
    live_video: {
      '/live_video/1/:id/timeline': RateLimit
    }
    live_video_stream: {
      '/live_video_stream/status/:id': RateLimit
    }
    media: {
      '/media/upload': RateLimit
    }
    mob_idsync_generate: {
      '/mob_idsync_generate': RateLimit
    }
    moments: {
      '/moments/annotate_timeline': RateLimit
      '/moments/capsule/:id': RateLimit
      '/moments/capsule/momentID': RateLimit
      '/moments/categories': RateLimit
      '/moments/categories/ttt_categories': RateLimit
      '/moments/create': RateLimit
      '/moments/curate/:id': RateLimit
      '/moments/curate_metadata/:id': RateLimit
      '/moments/delete': RateLimit
      '/moments/feedback': RateLimit
      '/moments/get_recommended_tweets': RateLimit
      '/moments/guide': RateLimit
      '/moments/like': RateLimit
      '/moments/list': RateLimit
      '/moments/list_categories': RateLimit
      '/moments/list_user_moments': RateLimit
      '/moments/modern_guide': RateLimit
      '/moments/permissions': RateLimit
      '/moments/pivot': RateLimit
      '/moments/publish': RateLimit
      '/moments/search': RateLimit
      '/moments/show/:id': RateLimit
      '/moments/sports/scores': RateLimit
      '/moments/statuses/update': RateLimit
      '/moments/subscribe': RateLimit
      '/moments/unlike': RateLimit
      '/moments/unsubscribe': RateLimit
      '/moments/update/:id': RateLimit
      '/moments/upsert': RateLimit
      '/moments/userlikes': RateLimit
      '/moments/users': RateLimit
    }
    mutes: {
      '/mutes/advanced_filters': RateLimit
      '/mutes/keywords/create': RateLimit
      '/mutes/keywords/destroy': RateLimit
      '/mutes/keywords/discouraged': RateLimit
      '/mutes/keywords/list': RateLimit
      '/mutes/users/ids': RateLimit
      '/mutes/users/list': RateLimit
    }
    news: {
      '/news/details': RateLimit
      '/news/rankings': RateLimit
      '/news/top': RateLimit
    }
    notifications: {
      '/notifications/:id': RateLimit
      '/notifications/:id/last_seen_cursor': RateLimit
      '/notifications/:id/unread_count': RateLimit
      '/notifications/settings/checkin': RateLimit
      '/notifications/settings/login': RateLimit
      '/notifications/settings/logout': RateLimit
      '/notifications/settings/save': RateLimit
      '/notifications/view/:id': RateLimit
    }
    oauth: {
      '/oauth/authenticate_periscope': RateLimit
      '/oauth/invalidate_token': RateLimit
      '/oauth/list': RateLimit
      '/oauth/revoke': RateLimit
      '/oauth/revoke_html': RateLimit
    }
    offers: {
      '/offers': RateLimit
    }
    onboarding: {
      '/onboarding/begin_verification': RateLimit
    }
    paseto: {
      '/paseto/token': RateLimit
    }
    people_discovery: {
      '/people_discovery/module': RateLimit
      '/people_discovery/modules': RateLimit
    }
    permissions: {
      '/permissions/user_permissions': RateLimit
      '/permissions/user_permissions/admin_email_verification': RateLimit
    }
    profile_spotlight: {
      '/profile_spotlight/show': RateLimit
    }
    promoted_content: {
      '/promoted_content/log': RateLimit
    }
    prompts: {
      '/prompts/record_event': RateLimit
      '/prompts/suggest': RateLimit
    }
    push_destinations: {
      '/push_destinations/device': RateLimit
      '/push_destinations/list': RateLimit
    }
    related_results: {
      '/related_results/show/:id': RateLimit
    }
    safety: {
      '/safety/detection_feedback': RateLimit
    }
    sandbox: {
      '/sandbox/account_activity/webhooks/:id/subscriptions': RateLimit
    }
    saved_searches: {
      '/saved_searches/destroy/:id': RateLimit
      '/saved_searches/list': RateLimit
      '/saved_searches/show/:id': RateLimit
    }
    search: {
      '/search/adaptive': RateLimit
      '/search/tweets': RateLimit
      '/search/typeahead': RateLimit
      '/search/universal': RateLimit
    }
    searchrecordings: {
      '/searchrecordings/list': RateLimit
      '/searchrecordings/show': RateLimit
    }
    special_events: {
      '/special_events/world_cup_2014/countries/list': RateLimit
      '/special_events/world_cup_2014/settings': RateLimit
    }
    stations: {
      '/stations/*': RateLimit
    }
    statuses: {
      '/statuses/:id/activity/summary': RateLimit
      '/statuses/favorited_by': RateLimit
      '/statuses/following_timeline': RateLimit
      '/statuses/friends': RateLimit
      '/statuses/home_timeline': RateLimit
      '/statuses/lookup': RateLimit
      '/statuses/media_timeline': RateLimit
      '/statuses/mentions_timeline': RateLimit
      '/statuses/oembed': RateLimit
      '/statuses/retweeted_by': RateLimit
      '/statuses/retweeters/ids': RateLimit
      '/statuses/retweets/:id': RateLimit
      '/statuses/retweets_of_me': RateLimit
      '/statuses/show/:id': RateLimit
      '/statuses/user_timeline': RateLimit
    }
    stickerprovider: {
      '/stickerprovider/catalog': RateLimit
      '/stickerprovider/stickers/:id': RateLimit
    }
    storystream: {
      '/storystream/stories': RateLimit
    }
    strato: {
      '/strato/column/None/:id/cms/*': RateLimit
      '/strato/column/User/:id/account-security/twoFactorAuthSetting': RateLimit
      '/strato/column/User/:id/account-security/twoFactorAuthSettings': RateLimit
      '/strato/column/User/:id/notifications/': RateLimit
      '/strato/column/User/:id/search/searchSafetyReadonly': RateLimit
    }
    streams: {
      '/streams/categories': RateLimit
      '/streams/recommended_modules': RateLimit
      '/streams/recommended_videos': RateLimit
      '/streams/related_users': RateLimit
      '/streams/stream': RateLimit
    }
    teams: {
      '/teams/authorize': RateLimit
    }
    tfb: {
      '/tfb/v1/quick_promote/statuses/most_recently_active': RateLimit
      '/tfb/v1/quick_promote/statuses/timeline': RateLimit
    }
    timeline: {
      '/timeline/bookmark': RateLimit
      '/timeline/conversation/:id': RateLimit
      '/timeline/favorites/:id': RateLimit
      '/timeline/home': RateLimit
      '/timeline/home_latest': RateLimit
      '/timeline/icymi': RateLimit
      '/timeline/liked_by': RateLimit
      '/timeline/list': RateLimit
      '/timeline/list_recommended_users': RateLimit
      '/timeline/media/:id': RateLimit
      '/timeline/profile/:id': RateLimit
      '/timeline/reactive': RateLimit
      '/timeline/retweeted_by': RateLimit
      '/timeline/user/:id': RateLimit
    }
    timelines: {
      '/timelines/hidden.json': RateLimit
    }
    traffic: {
      '/traffic/beacon-list': RateLimit
      '/traffic/map': RateLimit
      '/traffic/recommendations': RateLimit
    }
    translations: {
      '/translations/show': RateLimit
    }
    trends: {
      '/trends/available': RateLimit
      '/trends/closest': RateLimit
      '/trends/personalized': RateLimit
      '/trends/place': RateLimit
      '/trends/plus': RateLimit
      '/trends/timeline': RateLimit
    }
    tv: {
      '/tv/shows/:id': RateLimit
      '/tv/telecasts/:id': RateLimit
    }
    tweet_prompts: {
      '/tweet_prompts/report_interaction': RateLimit
      '/tweet_prompts/show': RateLimit
    }
    tweetdeck: {
      '/tweetdeck/clients': RateLimit
      '/tweetdeck/clients/blackbird': RateLimit
      '/tweetdeck/clients/blackbird/all': RateLimit
      '/tweetdeck/clients/pro': RateLimit
      '/tweetdeck/clients/pro/all': RateLimit
      '/tweetdeck/columns': RateLimit
      '/tweetdeck/dataminr/authtoken': RateLimit
      '/tweetdeck/feeds': RateLimit
    }
    tweets: {
      '/tweets/': RateLimit
      '/tweets/:id': RateLimit
      '/tweets/:id&DELETE': RateLimit
      '/tweets/:id/hidden&PUT': RateLimit
      '/tweets/:id/retweeted_by': RateLimit
      '/tweets/:tweet_id/liking_users': RateLimit
      '/tweets/counts/all': RateLimit
      '/tweets/counts/recent': RateLimit
      '/tweets/sample/stream': RateLimit
      '/tweets/search/:product/:instance/counts': RateLimit
      '/tweets/search/:product/:label': RateLimit
      '/tweets/search/all': RateLimit
      '/tweets/search/recent': RateLimit
      '/tweets/search/stream': RateLimit
      '/tweets/search/stream/rules': RateLimit
      '/tweets/search/stream/rules&DELETE': RateLimit
      '/tweets/search/stream/rules&POST': RateLimit
      '/tweets/search/stream/rules/validation&POST': RateLimit
    }
    'tweets&POST': {
      '/tweets&POST': RateLimit
    }
    urls: {
      '/urls/click': RateLimit
      '/urls/expand': RateLimit
    }
    users: {
      '/users/': RateLimit
      '/users/:id': RateLimit
      '/users/:id/blocking': RateLimit
      '/users/:id/blocking&POST': RateLimit
      '/users/:id/followed_lists&GET': RateLimit
      '/users/:id/followed_lists&POST': RateLimit
      '/users/:id/followed_lists/:list_id&DELETE': RateLimit
      '/users/:id/followers': RateLimit
      '/users/:id/following': RateLimit
      '/users/:id/liked_tweets': RateLimit
      '/users/:id/likes&POST': RateLimit
      '/users/:id/likes/:tweet_id&DELETE': RateLimit
      '/users/:id/list_memberships&GET': RateLimit
      '/users/:id/mentions': RateLimit
      '/users/:id/muting': RateLimit
      '/users/:id/muting&POST': RateLimit
      '/users/:id/owned_lists&GET': RateLimit
      '/users/:id/pinned_lists&GET': RateLimit
      '/users/:id/pinned_lists&POST': RateLimit
      '/users/:id/pinned_lists/:list_id&DELETE': RateLimit
      '/users/:id/retweets&POST': RateLimit
      '/users/:id/retweets/:source_tweet_id&DELETE': RateLimit
      '/users/:id/tweets': RateLimit
      '/users/:source_user_id/blocking/:target_user_id&DELETE': RateLimit
      '/users/:source_user_id/following&POST': RateLimit
      '/users/:source_user_id/following/:target_user_id&DELETE': RateLimit
      '/users/:source_user_id/muting/:target_user_id&DELETE': RateLimit
      '/users/by': RateLimit
      '/users/by/username/:handle/mentions': RateLimit
      '/users/by/username/:handle/tweets': RateLimit
      '/users/by/username/:source_username/following&POST': RateLimit
      '/users/by/username/:source_username/following/:target_user_name&DELETE': RateLimit
      '/users/by/username/:username': RateLimit
      '/users/by/username/:username/followers': RateLimit
      '/users/by/username/:username/following': RateLimit
      '/users/contributees': RateLimit
      '/users/contributees/pending': RateLimit
      '/users/contributors': RateLimit
      '/users/contributors/pending': RateLimit
      '/users/derived_info': RateLimit
      '/users/email_phone_info': RateLimit
      '/users/extended_profile': RateLimit
      '/users/following_followers_of': RateLimit
      '/users/interests/timelines': RateLimit
      '/users/interests/topics': RateLimit
      '/users/lookup': RateLimit
      '/users/phone_number_available': RateLimit
      '/users/profile_banner': RateLimit
      '/users/recommendations': RateLimit
      '/users/report_spam': RateLimit
      '/users/reverse_lookup': RateLimit
      '/users/search': RateLimit
      '/users/send_invites_by_email': RateLimit
      '/users/show/:id': RateLimit
      '/users/suggestions': RateLimit
      '/users/suggestions/:slug': RateLimit
      '/users/suggestions/:slug/members': RateLimit
      '/users/wipe_addressbook': RateLimit
    }
    'users_derived.info': {
      '/users_derived.info': RateLimit
    }
    verify: {
      '/verify/:version/access': RateLimit
      '/verify/:version/account-eligibility': RateLimit
      '/verify/:version/badge-violation': RateLimit
      '/verify/:version/badge-violation/violations': RateLimit
      '/verify/:version/document-formats': RateLimit
      '/verify/:version/id-document&GET': RateLimit
      '/verify/:version/id-document&POST': RateLimit
      '/verify/:version/intake': RateLimit
    }
    videos: {
      '/videos/:type/config/:id': RateLimit
      '/videos/suggestions': RateLimit
    }
    webhooks: {
      '/webhooks': RateLimit
      '/webhooks/subscriptions/direct_messages': RateLimit
    }
    '{:Version}': {
      '/{:Version}/moments/set_cover/{moment_id:Long}': RateLimit
    }
  }
}
