import { Controller, Post, Body, Get } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { WorkerService } from './worker.service';

@Controller('workers')
export class WorkerController {
  constructor(
    private readonly workerService: WorkerService,
    // private readonly rolesService: RolesService,
  ) {}
  //
  // @Post()
  // async create(@Body() userDto: CreateUserDto) {
  //   const user = await this.usersService.createUser(userDto);
  //   // const role = await this.rolesService.getRoleByValue('USER');
  //
  //   // await user.$set('roles', [role.id]);
  //   // user.roles = [role];
  //
  //   return user;
  // }
  //
  @Get()
  getAll() {
    return this.workerService.getAllWorkers();
  }
}
