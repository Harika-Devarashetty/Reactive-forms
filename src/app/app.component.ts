import { Component } from '@angular/core';
import { FormControlName,FormGroup ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reactive form';
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])


  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }
  get user()
  {
     return this.loginForm.get('user');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
}
