import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';
import { RequestType } from '../models/requests_type.model';

@Seeder({
  model: RequestType,
  foreignDelay: 1000,
})
export class SeedRequestType implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      {
        id: 1,
        name: 'Диагностика',
        description: 'Диагностика и обслуживание сетей',
        cost: 500,
      },
      {
        id: 2,
        name: 'Подключение интернета',
        description: 'Подключение интернета к оборудованию',
        cost: 1500,
      },
      {
        id: 3,
        name: 'Подключение телефона',
        description: 'Подключение телефона',
        cost: 1000,
      },
      {
        id: 4,
        name: 'Аренда теле-приставки',
        description: 'Аренда теле-приставки',
        cost: 2000,
      },
    ];
  }
}
