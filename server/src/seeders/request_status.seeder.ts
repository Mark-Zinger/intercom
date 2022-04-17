import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';
import { RequestStatus } from '../models/requests_status.model';

@Seeder({
  model: RequestStatus,
  foreignDelay: 1000,
})
export class SeedRequestStatus implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      { id: 1, name: 'НОВЫЙ' },
      { id: 2, name: 'В РАБОТЕ' },
      { id: 3, name: 'ВЫПОЛНЕНО' },
      { id: 4, name: 'ОТКАЗ' },
    ];
  }
}
