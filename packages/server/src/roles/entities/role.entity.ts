import { User } from './../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserRoles } from './user-roles.entity';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: "Unique value user's role" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: 'Admin', description: 'Role description' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
