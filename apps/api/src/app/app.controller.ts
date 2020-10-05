import { Controller, Get } from '@nestjs/common';

import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getData(): Promise<Message[]> {
    return this.appService.getData();
  }
}
