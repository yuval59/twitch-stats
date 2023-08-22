import { mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const UserTable = mysqlTable('user', {
  id: varchar('id', { length: 36 }).primaryKey(),

  username: varchar('username', { length: 255 }).unique().notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),

  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').onUpdateNow(),

  roleId: varchar('roleId', { length: 36 }).notNull(),
})
