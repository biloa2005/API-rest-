import { Injectable } from '@nestjs/common';
import {Todo} from "./todo.interface"
@Injectable()
export class TodoService {
    private todos: Todo []=[];
    //ajouter une tache
    create(todo:Omit<Todo,'id'>):Todo{
        const  newTodo:Todo = {
            id:Date.now(),
            ...todo
        }
        this.todos.push(newTodo);
        return newTodo;
    }
    //recuperer toutes les taches
    findAll(){
        return this.todos;
    }
    //retourner une tache par ID
    findOne(id:number){
        return this.todos.find(t=>t.id==id);
    }
    //supprimer une tache
    remove(id:number){
        this.todos=this.todos.filter(t=>t.id!=id);
    return {message:"tache supprimer"};
    }
}
