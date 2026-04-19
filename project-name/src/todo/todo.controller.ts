import { Controller,Get,Post,Body,Param,Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
@Controller('todo')
export class TodoController {
constructor(private readonly todoService:TodoService){}
//POST :TODOS
@Post()
create(@Body() body:any){
    return this.todoService.create(body)
}
//GET/TODOS
@Get()
findAll(){
    return this.todoService.findAll();

}
//Get todos :id
@Get(":id")
findOne(@Param("id") id:String){
    return this.todoService.findOne (Number(id));
}
//Delete todos :id
@Delete(":id")
remove (@Param("id") id:String){
    return this.todoService.remove(Number(id));
}
}
