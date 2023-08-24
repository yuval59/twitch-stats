import { MessageController } from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  const messages = await MessageController.getMessagesByUsername(
    'yuval59',
    'wadu',
    5,
    {
      field: 'timestamp',
      order: 'ASC',
    }
  )

  return NextResponse.json({ status: 'OK', messages })
}
