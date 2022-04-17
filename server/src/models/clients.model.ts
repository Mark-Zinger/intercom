import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';

import { Request } from './requests.model';

interface ClientCreationAttributes {
  name: string;
  email: string;
  phone: string;
  password: string;
}

@Table({ tableName: 'clients' })
export class Client extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
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
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Request)
  requests: Request[];
}
