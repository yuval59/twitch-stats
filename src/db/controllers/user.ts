import { eq } from 'drizzle-orm'
import { DEFAULT_ROLE } from './constants'
import { Controller } from './controller'
import { RoleController } from './role'
import { UserTable } from './schemas'
import { NewUser, User } from './types'

export class UserController extends Controller {
  static getUserById = <IncludeRole extends boolean = true>(
    id: string,
    includeRole = true
  ): Promise<User<IncludeRole> | undefined> =>
    this.dbInstance.query.UserTable.findFirst({
      where: eq(UserTable.id, id),
      with: {
        role: includeRole ? true : undefined,
      },
    })

  static getUserByEmail = <IncludeRole extends boolean = true>(
    email: string,
    includeRole = true
  ): Promise<User<IncludeRole> | undefined> =>
    this.dbInstance.query.UserTable.findFirst({
      where: eq(UserTable.email, email),
      with: {
        role: includeRole ? true : undefined,
      },
    })

  static getUserByUsername = <IncludeRole extends boolean = true>(
    username: string,
    includeRole = true
  ): Promise<User<IncludeRole> | undefined> =>
    this.dbInstance.query.UserTable.findFirst({
      where: eq(UserTable.username, username),
      with: {
        role: includeRole ? true : undefined,
      },
    })
}
