import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto, AuthRegisterDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: AuthLoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  registration(@Body() registerDto: AuthRegisterDto) {
    return this.authService.registration(registerDto);
  }
}
