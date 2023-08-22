import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const RoleTable = mysqlTable('role', {
  id: varchar('id', { length: 36 }).primaryKey(),

  name: varchar('name', { length: 255 }).unique().notNull(),
  level: int('level').notNull(),

  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').onUpdateNow(),
})
