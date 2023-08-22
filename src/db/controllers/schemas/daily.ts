import {
  date,
  int,
  json,
  mysqlTable,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core'

export const DailyTable = mysqlTable('daily', {
  id: varchar('id', { length: 36 }).primaryKey(),

  channelId: varchar('channelId', { length: 36 }).notNull(),
  messages: int('messages').notNull(),
  byUser: json('byUser').notNull(),
  byBadge: json('byBadge').notNull(),

  day: date('day').notNull(),

  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').onUpdateNow(),
})
