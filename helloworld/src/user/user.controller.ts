import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Get(':id') //localhost:1234/user/1
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Patch(':id') //localhost:1234/user/1
  patch(@Param('id') id: string, @Body() body: Partial<{ name: string, email: string, age: number, password: string }>) {
    return this.userService.editUser(Number(id), body);
  }

  @Delete(':id') //localhost:1234/user/1
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));   // setting the id as number 
  }
}
