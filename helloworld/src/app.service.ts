import { Injectable } from '@nestjs/common';

@Injectable() // here logic is done and inject on controller (chef is doing cooking and controller is serving)
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
