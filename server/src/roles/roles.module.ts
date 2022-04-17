import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from '../models/workers.model';
import { WorkerRole } from '../models/workers_roles.model';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedWorkersRole } from '../seeders/workers_roles.seeder';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([WorkerRole, Worker]),
    SeederModule.forFeature([SeedWorkersRole]),
  ],
  exports: [RolesService],
})
export class RolesModule {}
