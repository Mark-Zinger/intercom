import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Request } from './requests.model';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({
  tableName: 'requests_status',
  timestamps: false,
})
export class RequestStatus extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Request)
  requests: Request[];
}
