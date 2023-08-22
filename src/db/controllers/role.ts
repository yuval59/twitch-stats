import { eq } from 'drizzle-orm'
import { Controller } from './controller'
import { RoleTable } from './schemas'
import { Role } from './types'

export class RoleController extends Controller {
  static getRoleByName = async (name: string): Promise<Role | undefined> =>
    this.dbInstance.query.RoleTable.findFirst({
      where: eq(RoleTable.name, name),
    })
}
