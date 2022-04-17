import { Injectable } from '@nestjs/common';
import { Worker } from '../models/workers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
// import { Role } from '../roles/roles.model';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker) private readonly usersRepository: typeof Worker,
  ) {}

  async createUser(dto: CreateUserDto) {
    // const user = await this.usersRepository.create(dto);
    // return user;
  }

  async getAllUsers() {
    const users = await this.usersRepository.findAll<Worker>({
      // include: [Role],
    });
    return users;
  }

  async getUserByEmail(email: string) {
    // const user = await this.usersRepository.findOne<Worker>({
    //   where: { email },
    //   // include: [Role],
    // });
    // return user;
  }
}
