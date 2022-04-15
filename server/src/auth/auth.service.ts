import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthLoginDto, AuthRegisterDto } from './auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);
    return await this.generateToken(user);
  }

  async registration(authRegisterDto: AuthRegisterDto) {
    const candidate = await this.usersService.getUserByEmail(authRegisterDto.email);

    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(authRegisterDto.password, 5);

    const user = await this.usersService.createUser({
      ...authRegisterDto,
      password: hashedPassword,
    });

    return await this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(authLoginDto: AuthLoginDto) {
    const user = await this.usersService.getUserByEmail(authLoginDto.email);
    const passwordEqual = await bcrypt.compare(authLoginDto.password, user.password);

    if (user && passwordEqual) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
  }
}
