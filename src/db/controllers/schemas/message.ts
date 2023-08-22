import {
  json,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core'

export const MessageTable = mysqlTable('message', {
  id: varchar('id', { length: 36 }).primaryKey(),

  username: varchar('username', { length: 255 }).notNull(),
  message: text('message').notNull(),
  badges: json('badges').notNull(),

  timestamp: timestamp('timestamp').defaultNow(),

  channelId: varchar('channelId', { length: 36 }).notNull(),
})
