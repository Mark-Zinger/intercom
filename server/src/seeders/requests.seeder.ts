import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';

import getDateOffset from '../helpers/getDateOffset';
import { Request } from '../models/requests.model';
import {Worker} from "../models/workers.model";


@Seeder({
  model: Request,
  foreignDelay: 5000,
  containsForeignKeys: true,
})
export class SeedRequest implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      {
        id: 1,
        address: 'ул. Проспектная 13, кв. 5',
        client_id: 1,
        type_id: 2,
        worker_id: 2,
        status_id: 4,
        datetimeComplite: getDateOffset(-5),
      },
      {
        id: 2,
        address: 'ул. Ленина 3, кв. 26',
        client_id: 2,
        type_id: 4,
        worker_id: 3,
        status_id: 1,
        datetimeComplite: getDateOffset(-2),
      },
      {
        id: 3,
        address: 'ул. Яворского 9, кв. 15',
        client_id: 3,
        type_id: 2,
        worker_id: 1,
        status_id: 3,
        datetimeComplite: getDateOffset(-7),
      },
      {
        id: 4,
        address: 'ул. Желтовского 2, кв. 19',
        client_id: 4,
        type_id: 2,
        worker_id: 2,
        status_id: 2,
        datetimeComplite: getDateOffset(-1),
      },
      {
        id: 5,
        address: 'ул. Ленина 1, кв. 1',
        client_id: 5,
        type_id: 3,
        worker_id: 3,
        status_id: 4,
        datetimeComplite: getDateOffset(-8),
      },
      {
        id: 6,
        address: 'пр. Шахтёров 11, кв. 23',
        client_id: 6,
        type_id: 1,
        worker_id: 1,
        status_id: 1,
        datetimeComplite: getDateOffset(-1),
      },
      {
        id: 7,
        address: 'пр. Строителей 20, кв. 14',
        client_id: 7,
        type_id: 2,
        worker_id: 2,
        status_id: 3,
        datetimeComplite: getDateOffset(-10),
      },
      {
        id: 8,
        address: 'ул. Сильванова 14, кв. 7',
        client_id: 8,
        type_id: 3,
        worker_id: 2,
        status_id: 3,
        datetimeComplite: getDateOffset(-14),
      },
      {
        id: 9,
        address: 'ул. Советов 19, кв. 9',
        client_id: 9,
        type_id: 4,
        worker_id: 2,
        status_id: 2,
        datetimeComplite: getDateOffset(-3),
      },
      {
        id: 10,
        address: 'ул. Маганак 7, кв. 7',
        client_id: 10,
        type_id: 1,
        worker_id: 4,
        status_id: 1,
        datetimeComplite: getDateOffset(-1),
      },
      {
        id: 11,
        address: 'ул. Комсомольская 24, кв. 3',
        client_id: 11,
        type_id: 4,
        worker_id: 1,
        status_id: 2,
        datetimeComplite: getDateOffset(-2),
      },
      {
        id: 12,
        address: 'ул. Институтская 13, кв. 18',
        client_id: 12,
        type_id: 2,
        worker_id: 4,
        status_id: 3,
        datetimeComplite: getDateOffset(-20),
      },
      {
        id: 13,
        address: 'пр. Гагарина 9, кв. 4',
        client_id: 13,
        type_id: 3,
        worker_id: 1,
        status_id: 4,
        datetimeComplite: getDateOffset(-1),
      },
      {
        id: 14,
        address: 'ул. Гайдара 5, кв. 17',
        client_id: 14,
        type_id: 1,
        worker_id: 1,
        status_id: 1,
        datetimeComplite: getDateOffset(-1),
      },
      {
        id: 15,
        address: 'ул. Желтовского 18, кв. 22',
        client_id: 15,
        type_id: 3,
        worker_id: 4,
        status_id: 3,
        datetimeComplite: getDateOffset(-4),
      },
    ];
  }
}
