import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Worker } from './workers.model';

@Table({
  tableName: 'roles',
  timestamps: false,
})
export class WorkerRole extends Model {
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

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  description: string;

  @HasMany(() => Worker)
  users: Worker[];
}
