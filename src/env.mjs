import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PLANETSCALE_HOST: z.string(),
    PLANETSCALE_USER: z.string(),
    PLANETSCALE_PASS: z.string(),
    PLANETSCALE_DB: z.string(),
  },

  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    CLERK_SECRET_KEY: z.string(),
  },

  runtimeEnv: process.env,
})
