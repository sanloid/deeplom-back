import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';


@Injectable()
export class AuthService {

  register(registerDto: AuthDto) {
    return 'This action adds a new user and return jwt token';
  }

  login(loginDto: AuthDto) {
    return `This action returns jwt token`;
  }

}
