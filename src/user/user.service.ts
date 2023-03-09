import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {
        console.log('userRepository', userRepository);
  }

  async getById(id: number): Promise<User> {
    
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
