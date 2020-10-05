import { Injectable } from '@nestjs/common';
import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
