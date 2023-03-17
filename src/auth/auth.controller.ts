import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  register(@Body() registerDto: AuthDto) {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  login(@Body() loginDto: AuthDto) {
    return this.authService.login(loginDto);
  }
}
