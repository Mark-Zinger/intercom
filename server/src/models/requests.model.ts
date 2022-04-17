import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey, BelongsTo,
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
  client_id: number;

  @BelongsTo(() => Client)
  client: Client;

  @ForeignKey(() => RequestType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  type_id: number;

  @BelongsTo(() => RequestType)
  type: RequestType;

  @ForeignKey(() => Worker)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  worker_id: number;

  @BelongsTo(() => Worker)
  worker: Worker;

  @ForeignKey(() => RequestStatus)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  status_id: number;

  @BelongsTo(() => RequestStatus)
  status: RequestStatus;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    unique: false,
  })
  datetimeComplite: Date;
}
