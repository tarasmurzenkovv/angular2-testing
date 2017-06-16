import {TodoFormComponent} from './todo-form.component';
import {AbstractControl, FormBuilder} from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with two controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let nameFormControl: AbstractControl = component.form.get('name');
    nameFormControl.setValue('');
    expect(nameFormControl.valid).toBeFalsy();
  });
});
