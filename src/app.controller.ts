import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject("user-message") private readonly userMessage:ClientKafka
    ) {}

  @Get()
  getHello(): string {
     this.userMessage.emit('user',{message:"Hello world"});
     return "Ahmed"
  }
  @MessagePattern('allstorage_file')
  allUser(data:any){ 
    console.log(data.value)
  }
  @MessagePattern('createstorage_file')
  createUser(data:any){ 
    console.log(data.value)
  }
  @MessagePattern('updatestorage_file')
  updateUser(data:any){ 
    console.log(data.value)
  }

  @MessagePattern('deletestorage_file')
  deleteUser(data:any){ 
    console.log(data.value)
  }
}
