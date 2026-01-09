import { Controller, Get } from '@nestjs/common';

@Controller()//Decorator (use to handle http requests)
export class AppController {
  @Get() //localhost:3000
  getHello() {
    return 'Hello World!!!';
  }
}
