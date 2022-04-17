import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey, HasMany,
} from 'sequelize-typescript';
import { WorkerRole } from 'src/models/workers_roles.model';
import {Request} from "./requests.model";


@Table({ tableName: 'workers' })
export class Worker extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  hireDate: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  birthday: string;

  @ForeignKey(() => WorkerRole)
  role_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  password: string;

  @HasMany(() => Request)
  requests: Request[];
}
