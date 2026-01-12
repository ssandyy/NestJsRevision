import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Get(':id') //localhost:1234/user/1
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Patch(':id') //localhost:1234/user/1
  patch(@Param('id') id: string, @Body() body: Partial<CreateUserDto>) {
    return this.userService.editUser(id, body);
  }

  @Delete(':id') //localhost:1234/user/1
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(id);   // setting the id as number 
  }
}
