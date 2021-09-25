import { CreateUserDto } from 'core/domain/users/dto/create-user.dto'
import { User } from 'core/domain/users/user'

export interface IUsersService {
  readonly create: (createUserDto: CreateUserDto) => Promise<User>

  readonly getAll: () => Promise<User[]>

  // readonly getByEmail: (email: string) => Promise<User>
}
