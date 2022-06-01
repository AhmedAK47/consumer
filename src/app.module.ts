import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([{
    name:"user-message",
    transport:Transport.KAFKA,
    options:{
      client:{
      clientId: "user",
      brokers: ['localhost:9092']
      },
      consumer:{
        groupId : "user-consumer"
      }
    }
  }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
