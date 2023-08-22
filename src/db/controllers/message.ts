import { and, asc, between, desc, eq } from 'drizzle-orm'
import { ChannelController } from './channel'
import { MAXIMUM_MESSAGES, MINIMUM_MESSAGES } from './constants'
import { Controller } from './controller'
import { MessageTable } from './schemas'
import { Message } from './types'

type SortParams = { field: keyof Message<false>; order: 'ASC' | 'DESC' }

export class MessageController extends Controller {
  static getMessagesBetween = async (
    minDate: Date,
    maxDate: Date
  ): Promise<Message<true>[]> => {
    const res = await this.dbInstance.query.MessageTable.findMany({
      where: between(MessageTable.timestamp, minDate, maxDate),
      with: {
        channel: true,
      },
    })

    return res as Message<true>[]
  }

  static getMessagesByUsername = async (
    username: string,
    channelName: string,
    limit: number,
    sort?: SortParams
  ): Promise<Message<false>[]> => {
    if (limit > MAXIMUM_MESSAGES) limit = MAXIMUM_MESSAGES
    if (limit < MINIMUM_MESSAGES) limit = MINIMUM_MESSAGES

    const channel = await ChannelController.getChannelByName(channelName)

    if (!channel) return []

    const orderBy = sort
      ? sort.order == 'ASC'
        ? asc(MessageTable[sort.field])
        : desc(MessageTable[sort.field])
      : undefined

    const res = await this.dbInstance.query.MessageTable.findMany({
      where: and(
        eq(MessageTable.channelId, channel.id),
        eq(MessageTable.username, username)
      ),
      limit,
      orderBy,
    })

    return res as Message<false>[]
  }
}
