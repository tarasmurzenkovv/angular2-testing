import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should get todos from a server', () => {
    let todos = [[1, 2, 3]];
    spyOn(service, 'getTodos').and.callFake(() => Observable.from([todos]));
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('should call add method from todo service', () => {
    let spy = spyOn(service, 'add').and.callFake(todo => Observable.empty());
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add a new todo received from a server', () => {
    let todo = {id: 1};
    spyOn(service, 'add').and.returnValue(Observable.from([todo]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set message property if server return an error when adding a new todo', () => {
    let error = 'error from a server';
    spyOn(service, 'add').and.returnValue(Observable.throw(error));
    component.add();
    expect(component.message).toBe(error);
  });

  it('should should call a server to delete the todo item if the user confirms', () => {
    let todoId = 1;
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    component.delete(todoId);
    expect(spy).toHaveBeenCalledWith(todoId);
  });

  it('should not call a server to delete the todo item if the user does not confirm', () => {
    let todoId = 1;
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    component.delete(todoId);
    expect(spy).not.toHaveBeenCalled();
  });
});
