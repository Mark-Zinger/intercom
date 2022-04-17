import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import {Request} from "./requests.model";

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({
  tableName: 'requests_type',
  timestamps: false,
})
export class RequestType extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @HasMany(() => Request)
  requests: Request[];

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  cost: number;
}
