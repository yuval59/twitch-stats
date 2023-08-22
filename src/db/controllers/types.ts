import { InferModel } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { ChannelTable, MessageTable } from './schemas'
import { DailyTable } from './schemas/daily'
import { RoleTable } from './schemas/role'
import { UserTable } from './schemas/user'

export type ReplaceBadges<T extends Record<string, unknown>> = {
  badges: Badges
} & Omit<T, 'badges'>

export type Badges = {
  admin?: string | undefined
  bits?: string | undefined
  broadcaster?: string | undefined
  partner?: string | undefined
  global_mod?: string | undefined
  moderator?: string | undefined
  vip?: string | undefined
  subscriber?: string | undefined
  staff?: string | undefined
  turbo?: string | undefined
  premium?: string | undefined
  founder?: string | undefined
  ['bits-leader']?: string | undefined
  ['sub-gifter']?: string | undefined
  [other: string]: string | undefined
}

export type Channel = InferModel<typeof ChannelTable>
export type Daily = InferModel<typeof DailyTable>
export type Role = InferModel<typeof RoleTable>

export type Message<IncludeChannel extends boolean> =
  IncludeChannel extends true
    ? ReplaceBadges<InferModel<typeof MessageTable>> & { channel: Channel }
    : ReplaceBadges<InferModel<typeof MessageTable>>

export type User<IncludeRole extends boolean> = IncludeRole extends true
  ? InferModel<typeof UserTable> & { role: Role }
  : InferModel<typeof UserTable>

export type NewUser = {
  email: string
  username: string
  password: string
}

export type NewMessage = {
  username: string
  channelName: string
  message: string
  badges: Badges
}

export type ByChannelObject = {
  [channelName: string]: {
    messages: number
    byBadge: ByBadgeDaily
    byUser: ByUserDaily
  }
}

export type ByBadgeDaily = { [badgeName: keyof Badges]: number }

export type ByUserDaily = { [username: string]: number }
