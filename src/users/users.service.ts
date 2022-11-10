import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    if (this.findByLogin(createUserDto.login) === null) {
      throw new HttpException('User with the same name already exist', 400);
    }
    const hashPassword = await bcrypt.hash(createUserDto.password, 5);
    const usr = this.usersRepository.insert({
      ...createUserDto,
      password: hashPassword,
    });
    return {
      login: createUserDto.login,
    };
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async findByLogin(login: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { login: login } });
  }

  remove(id) {
    this.usersRepository.remove(id);
  }
}
