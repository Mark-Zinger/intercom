import { Injectable } from '@nestjs/common';
import { Worker } from '../models/workers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import {WorkerRole} from "../models/workers_roles.model";


@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker) private readonly usersRepository: typeof Worker,
  ) {}

  async createUser(dto: CreateUserDto) {
    // const user = await this.usersRepository.create(dto);
    // return user;
  }

  async getAllWorkers() {
    const workers = await this.usersRepository.findAll<Worker>({
      include: { all: true },
    });
    return workers;
  }

  async getUserByEmail(email: string) {
    // const user = await this.usersRepository.findOne<Worker>({
    //   where: { email },
    //   // include: [Role],
    // });
    // return user;
  }
}
