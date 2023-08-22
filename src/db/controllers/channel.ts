import { eq } from 'drizzle-orm'
import { Controller } from './controller'
import { ChannelTable } from './schemas'
import { Channel } from './types'

export class ChannelController extends Controller {
  static getChannels = (): Promise<Channel[]> =>
    this.dbInstance.select().from(ChannelTable)

  static getChannelByName = (name: string): Promise<Channel | undefined> =>
    this.dbInstance.query.ChannelTable.findFirst({
      where: eq(ChannelTable.name, name),
    })
}
