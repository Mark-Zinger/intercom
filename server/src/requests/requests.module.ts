import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from '../models/requests.model';
import { Worker } from '../models/workers.model';
import { RequestType } from '../models/requests_type.model';
import { RequestStatus } from '../models/requests_status.model';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedRequestStatus } from '../seeders/request_status.seeder';
import { SeedRequestType } from '../seeders/request_type.seeder';
import { SeedRequest } from '../seeders/requests.seeder';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { Client } from '../models/clients.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      RequestType,
      RequestStatus,
      Worker,
      Client,
      Request,
    ]),
    SeederModule.forFeature([SeedRequestStatus]),
    SeederModule.forFeature([SeedRequestType]),
    SeederModule.forFeature([SeedRequest]),
  ],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
