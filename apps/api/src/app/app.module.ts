import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  message: String,
});

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> => {
        console.warn('DATABASE_CONNECTION', process.env.CONNECTION_STRING);
        return mongoose.connect(process.env.CONNECTION_STRING);
      }
    },
    {
      provide: 'MESSAGE_MODEL',
      useFactory: (connection: Connection) => connection.model('Message', MessageSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class AppModule {}
