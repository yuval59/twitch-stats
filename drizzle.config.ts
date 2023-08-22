import 'dotenv/config'
import type { Config } from 'drizzle-kit'

const { PLANETSCALE_USER, PLANETSCALE_PASS, PLANETSCALE_HOST, PLANETSCALE_DB } =
  process.env

const connectionString = `mysql://${PLANETSCALE_USER}:${PLANETSCALE_PASS}@${PLANETSCALE_HOST}/${PLANETSCALE_DB}?ssl={"rejectUnauthorized":true}`

export default {
  out: './drizzle',
  schema: ['./src/db/controllers/schemas'],

  driver: 'mysql2',
  dbCredentials: {
    connectionString,
  },
} satisfies Config
