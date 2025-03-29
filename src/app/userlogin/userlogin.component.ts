import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  loginForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }
  // get f() {
  //   return this.loginForm.controls;
  // }

  onSubmit() {
    //email = test@gmail.com
    //password = test  

    //To Do 
   if(this.loginForm.get('password')?.value === "mrunal" && this.loginForm.get('email')?.value === "mrunal@gmail.com")
   {
     alert("User Credentials are correct.Login successful!");
     this.router.navigate(['productlists-component']);
     
         
   } else
  {
      alert("User Credentials are incorrect.");
  }
     
  }

}
