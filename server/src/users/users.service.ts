import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '../roles/roles.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly usersRepository: typeof User,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.usersRepository.findAll<User>({
      include: [Role],
    });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne<User>({
      where: { email },
      include: [Role],
    });
    return user;
  }
}
