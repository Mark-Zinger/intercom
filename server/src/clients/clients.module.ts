import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';

import { Client } from '../models/clients.model';
import { Request } from '../models/requests.model';
import { SeedClient } from '../seeders/clients.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Client, Request]),
    SeederModule.forFeature([SeedClient]),
  ],
  controllers: [],
  providers: [],
})
export class ClientsModule {}
