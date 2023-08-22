import { relations } from 'drizzle-orm'
import { ChannelTable } from './channel'
import { DailyTable } from './daily'
import { MessageTable } from './message'
import { RoleTable } from './role'
import { UserTable } from './user'

export const MessageRelations = relations(MessageTable, ({ one }) => ({
  channel: one(ChannelTable, {
    fields: [MessageTable.channelId],
    references: [ChannelTable.id],
  }),
}))

export const ChannelRelations = relations(ChannelTable, ({ many }) => ({
  messages: many(MessageTable),
  dailySummaries: many(DailyTable),
}))

export const UserRelations = relations(UserTable, ({ one }) => ({
  role: one(RoleTable, {
    fields: [UserTable.roleId],
    references: [RoleTable.id],
  }),
}))

export const RoleRelations = relations(RoleTable, ({ many }) => ({
  users: many(UserTable),
}))

export const DailyRelations = relations(DailyTable, ({ one }) => ({
  channel: one(ChannelTable, {
    fields: [DailyTable.channelId],
    references: [ChannelTable.id],
  }),
}))
