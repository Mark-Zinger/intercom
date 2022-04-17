import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { RequestType } from './requests_type.model';
import { Worker } from './workers.model';
import { RequestStatus } from './requests_status.model';
import { Client } from './clients.model';

@Table({ tableName: 'requests' })
export class Request extends Model {
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
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: false,
  })
  contractLink: string;

  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  client_id: string;

  @ForeignKey(() => RequestType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  type_id: string;

  @ForeignKey(() => Worker)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  worker_id: string;

  @ForeignKey(() => RequestStatus)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  status_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    unique: false,
  })
  datetimeComplite: Date;
}
