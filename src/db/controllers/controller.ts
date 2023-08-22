import { connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { env } from '../../env.mjs'
import { schema } from './schemas'

export abstract class Controller {
  protected static readonly dbInstance = drizzle(
    connect({
      host: env.PLANETSCALE_HOST,
      username: env.PLANETSCALE_USER,
      password: env.PLANETSCALE_PASS,
    }),
    { schema }
  )
}
