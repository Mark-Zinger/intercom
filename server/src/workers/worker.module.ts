import { Module } from '@nestjs/common';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from '../models/workers.model';
import { WorkerRole } from '../models/workers_roles.model';
import { Request } from '../models/requests.model';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedWorker } from '../seeders/workers.seeder';

@Module({
  controllers: [WorkerController],
  providers: [WorkerService],
  imports: [
    SequelizeModule.forFeature([WorkerRole, Worker]),
    SeederModule.forFeature([SeedWorker]),
  ],
  exports: [WorkerService],
})
export class WorkerModule {}
