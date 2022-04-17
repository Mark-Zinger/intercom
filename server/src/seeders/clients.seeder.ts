import {
  Seeder,
  OnSeederInit,
  SeederModuleOptions,
} from 'nestjs-sequelize-seeder';
import { Client } from '../models/clients.model';

@Seeder({
  model: Client,
  unique: ['email', 'phone'],
})
export class SeedClient implements OnSeederInit {
  run(options: SeederModuleOptions) {
    return [
      {
        name: 'Вереск Владислав Викторович',
        email: 'vereskvv@mail.ru',
        phone: '89095209170',
        password: '123456',
      },
      {
        name: 'Волщенюк Иван Витальевич',
        email: 'wol.iva.@mail.ru',
        phone: '89001056899',
        password: '123456',
      },
      {
        name: 'Никонорова Вероника Алексеевна',
        email: 'nika.lex.17@gmail.com',
        phone: '89517121482',
        password: '123456',
      },
      {
        name: 'Ефремов Михаил Сергеевич',
        email: 'misha.2003@gmail.com',
        phone: '89089417920',
        password: '123456',
      },
      {
        name: 'Агеева Валерия Дмитриевна',
        email: 'agusha98@mail.ru',
        phone: '89832186945',
        password: '123456',
      },
      {
        name: 'Смолин Сергей Николаевич',
        email: 'sergo.nik@mail.ru',
        phone: '89996486775',
        password: '123456',
      },
      {
        name: 'Елькина Марина Викторовна',
        email: 'yolka666@gmail.com',
        phone: '89882002194',
        password: '123456',
      },
      {
        name: 'Налимов Олег Николаевич',
        email: 'super.cap@gmail.com',
        phone: '89507117732',
        password: '123456',
      },
      {
        name: 'Борисов Антон Евгеньевич',
        email: 'b2bilil@gmail.com',
        phone: '89095143667',
        password: '123456',
      },
      {
        name: 'Смирнова Александра Андреевна',
        email: 'sasha.a.97@mail.ru',
        phone: '89053151911',
        password: '123456',
      },
      {
        name: 'Волщенюк Иван Витальевич',
        email: 'wol.iva.@mail.ru',
        phone: '89001056899',
        password: '123456',
      },
      {
        name: 'Антошин Алексей Евгеньевич',
        email: 'antoshaal2003@gmail.com',
        phone: '89004546114',
        password: '123456',
      },
      {
        name: 'Бондарев Алексей Алексеевич',
        email: 'lesha.bond@mail.ru',
        phone: '89511353587',
        password: '123456',
      },
      {
        name: 'Денисова Наталья Андреевна',
        email: 'natalia@mail.ru',
        phone: '89030719610',
        password: '123456',
      },
      {
        name: 'Манохин Антон Александрович',
        email: 'kiborg228@mail.ru',
        phone: '89502664936',
        password: '123456',
      },
      {
        name: 'Максимова Владислава Дмитриевна',
        email: 'vladissslava@gmail.com',
        phone: '89234777289',
        password: '123456',
      },
    ];
  }
}
