export { ChannelTable } from './channel'
export { DailyTable } from './daily'
export { MessageTable } from './message'
export { RoleTable } from './role'
export { UserTable } from './user'

import { ChannelTable } from './channel'
import { DailyTable } from './daily'
import { MessageTable } from './message'
import { RoleTable } from './role'
import { UserTable } from './user'

import {
  ChannelRelations,
  DailyRelations,
  MessageRelations,
  RoleRelations,
  UserRelations,
} from './relations'

export const schema = {
  ChannelTable,
  ChannelRelations,

  MessageTable,
  MessageRelations,

  DailyTable,
  DailyRelations,

  RoleTable,
  RoleRelations,

  UserTable,
  UserRelations,
}
