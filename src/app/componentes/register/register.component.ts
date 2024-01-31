import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
[x: string]: any;
  registerForma = this.fb.group({
    "name": ['',[Validators.required]]
  });
  constructor(private fb:FormBuilder){

  }
  get fullName(){
    return this.registerForma.controls['fullName'];
  }
  get email(){
    return this.registerForma.controls['email'];
  }
  get password(){
    return this.registerForma.controls['password'];
  }
  get confirmpassword(){
    return this.registerForma.controls['confirmPassword'];
  }
  

}
