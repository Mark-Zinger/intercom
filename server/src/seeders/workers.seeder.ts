import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';
import { Worker } from '../models/workers.model';

@Seeder({
  model: Worker,
  unique: ['email', 'phone'],
  containsForeignKeys: true,
})
export class SeedWorker implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      {
        id: 1,
        name: 'Бортник Маргарита Алексеевна',
        email: 'nlsавhubilov@base.ru',
        phone: '8909233127018',
        hireDate: new Date(2000, 12, 26).toISOString(),
        birthday: new Date(1989, 7, 13).toISOString(),
        role_id: 3,
        password: '12345657',
      },
      {
        id: 2,
        name: 'Шумилов Никита Александрович',
        email: 'nlshubilov@base.ru',
        phone: '89093127018',
        hireDate: new Date(2019, 1, 26).toISOString(),
        birthday: new Date(1999, 4, 17).toISOString(),
        role_id: 1,
        password: '12345657',
      },
      {
        id: 3,
        name: 'Раевский Адексей Евгеньевич',
        email: 'raevsky@base.ru',
        phone: '89017307823',
        hireDate: new Date(2019, 1, 17).toISOString(),
        birthday: new Date(2000, 1, 13).toISOString(),
        role_id: 2,
        password: '123456',
      },
      {
        id: 4,
        name: 'Прошина Ольга Сергеевна',
        email: 'proshina@base.ru',
        phone: '89037402009',
        hireDate: new Date(2019, 2, 3).toISOString(),
        birthday: new Date(1993, 11, 7).toISOString(),
        role_id: 2,
        password: '123456',
      },
      {
        id: 5,
        name: 'Карпова Надежда Николаевна',
        email: 'karpova@base.ru',
        phone: '89098127023',
        hireDate: new Date(2019, 1, 20).toISOString(),
        birthday: new Date(1990, 8, 15).toISOString(),
        role_id: 1,
        password: '123456',
      },
    ];
  }
}
