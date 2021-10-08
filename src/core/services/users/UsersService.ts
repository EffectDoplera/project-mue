import { User } from 'src/core/domain/users'
import { CreateUserDto } from 'src/core/domain/users/dto/create-user.dto'

export interface IUsersService {
  readonly create: (createUserDto: CreateUserDto) => Promise<User>

  // readonly getAll: () => Promise<User[]>

  // readonly getByEmail: (email: string) => Promise<User>
}
