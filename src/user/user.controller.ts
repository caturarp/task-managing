import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getById(id);
  }
}
