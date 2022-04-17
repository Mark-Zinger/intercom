import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkerModule } from './workers/worker.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { ClientsModule } from './clients/clients.module';
import { RequestsModule } from './requests/requests.module';

import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),

    SeederModule.forRoot({
      runOnlyIfTableIsEmpty: true,
    }),

    WorkerModule,
    RolesModule,
    ClientsModule,
    RequestsModule,
  ],
})
export class AppModule {}
