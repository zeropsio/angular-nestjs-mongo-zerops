import { Inject, Injectable } from '@nestjs/common';
import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

  constructor(
    @Inject('MESSAGE_MODEL')
    private messageModel: Model<Message>,
  ) {}


  getData(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async createData(): Promise<Message> {
    const createdMessage = new this.messageModel({ message: new Date().toISOString() });
    return createdMessage.save();
  }

}
