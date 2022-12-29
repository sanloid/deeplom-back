import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  register(@Body() registerDto: AuthDto) {
    return this.authService.register(registerDto);
  }

  @Get()
  login(@Body() loginDto: AuthDto) {
    return this.authService.login(loginDto);
  }
}
