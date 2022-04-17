import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthLoginDto, AuthRegisterDto } from './auth.dto';
import { WorkerService } from '../workers/worker.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {Worker} from "../models/workers.model";
// import { User } from 'src/workers/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: WorkerService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    // const user = await this.validateUser(authLoginDto);
    // return await this.generateToken(user);
  }

  async registration(authRegisterDto: AuthRegisterDto) {
    // const candidate = await this.usersService.getUserByEmail(authRegisterDto.email);
    //
    // if (candidate) {
    //   throw new HttpException(
    //     'Пользователь с таким email уже существует',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    //
    // const hashedPassword = await bcrypt.hash(authRegisterDto.password, 5);

    // const user = await this.usersService.createUser({
    //   ...authRegisterDto,
    //   password: hashedPassword,
    // });
    //
    // return await this.generateToken(user);
  }

  async generateToken(worker: Worker) {
    // const payload = {
    //   email: worker.email,
    //   id: worker.id,
    //   // roles: worker.roles
    // };
    // return {
    //   accessToken: this.jwtService.sign(payload),
    // };
  }

  private async validateUser(authLoginDto: AuthLoginDto) {
    // const user = await this.usersService.getUserByEmail(authLoginDto.email);
    // const passwordEqual = await bcrypt.compare(authLoginDto.password, user.password);
    //
    // if (user && passwordEqual) {
    //   return user;
    // }
    //
    // throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
  }
}
