import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from '../models/requests.model';
import {Client} from "../models/clients.model";
import { QueryTypes } from 'sequelize';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request) private readonly requestRepository: typeof Request,
  ) {}

  async getTotalCost() {
    const dateStart = '2020-04-01 00:00';
    const dateEnd = '2023-04-13 00:00';

    const result = await this.requestRepository.sequelize.query(
      `
            SELECT 
              SUM(cost) 
            FROM 
              (SELECT * FROM requests WHERE status_id = 3 AND datetimeComplite > $dateStart AND datetimeComplite < $dateEnd) AS req, 
              requests_type AS typ
            WHERE 
              typ.id = req.type_id;
        `,
      {
        type: QueryTypes.SELECT,
        bind: {
          dateStart,
          dateEnd,
        },
      },
    );

    return result;
  }

  async findAll(): Promise<Request[]> {
    return await this.requestRepository.findAll({
      include: { all: true },
    });
  }
}
