import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';
import { WorkerRole } from '../models/workers_roles.model';

@Seeder({
  model: WorkerRole,
  unique: ['name'],
})
export class SeedWorkersRole implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      {
        id: 1,
        name: 'WORKER',
        description: 'Штатный сотрудник компании',
      },
      {
        id: 2,
        name: 'MANAGER',
        description: 'Менеджер компании',
      },
      {
        id: 3,
        name: 'ADMIN',
        description: 'Администратор компании',
      },
    ];
  }
}
