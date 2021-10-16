import { CreateUserDto, User } from 'core/domain'

export abstract class UserService {
  public static create: (createUserDto: CreateUserDto, uuid: string) => Promise<User>
}
