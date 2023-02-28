import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: AuthDto) {
    const user = await this.usersService.create({ ...registerDto });
    return this.generateToken(user);
  }

  async login(loginDto: AuthDto) {
    const user = await this.validateUser(loginDto);
    return this.generateToken(user);
  }

  private async generateToken(usr: User) {
    return {
      token: this.jwtService.sign({
        id: usr.id,
        login: usr.login,
        firstName: usr.firstName,
        lastName: usr.lastName,
      }),
    };
  }

  async validateUser(usr: AuthDto) {
    const user = await this.usersService.findByLogin(usr.login);
    if (user === null)
      throw new UnauthorizedException({
        message: "user with this name doesn't exist",
      });
    const passEqual = await bcrypt.compare(usr.password, user.password);
    if (user && passEqual) {
      return user;
    }
    throw new UnauthorizedException({ message: 'wrong username or password' });
  }
}
