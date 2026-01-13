import { Body, Controller, Delete, Get, Param, Patch, Post, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body(UppercasePipe) createUserDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('User already exists');
    }
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getUser() {
    return await this.userService.getUser();
  }

  @Get(':id') //localhost:1234/user/1
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Patch(':id') //localhost:1234/user/1
  async patch(@Param('id') id: string, @Body() body: Partial<CreateUserDto>) {
    return await this.userService.editUser(id, body);
  }

  @Delete(':id') //localhost:1234/user/1
  async remove(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
