import { asc, between, desc, eq } from 'drizzle-orm'
import { ChannelController } from './channel'
import { MAXIMUM_MESSAGES, MINIMUM_MESSAGES } from './constants'
import { Controller } from './controller'
import { MessageTable } from './schemas'
import { Message } from './types'

type SortParams = { field: keyof Message; order: 'ASC' | 'DESC' }

type GetMessagesByUsernameParams = {
  username: string
  limit: number
  channelName?: string
  sort?: SortParams
}

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
    params: GetMessagesByUsernameParams
  ): Promise<Message[]> => {
    const { limit, username, channelName, sort } = params

    const boundLimit =
      limit < MAXIMUM_MESSAGES
        ? limit > MINIMUM_MESSAGES
          ? limit
          : MINIMUM_MESSAGES
        : MAXIMUM_MESSAGES

    const orderBy = sort
      ? sort.order == 'ASC'
        ? asc(MessageTable[sort.field])
        : desc(MessageTable[sort.field])
      : undefined

    const res = await this.dbInstance.query.MessageTable.findMany({
      where: (messages, { and, eq }) =>
        and(
          eq(messages.channel.name, channelName),
          eq(messages.username, username)
        ),
      limit: boundLimit,
      orderBy,
    })

    return res as Message[]
  }
}
