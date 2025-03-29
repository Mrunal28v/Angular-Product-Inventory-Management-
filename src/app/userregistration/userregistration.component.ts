import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-userregistration',
  imports: [FormsModule,ReactiveFormsModule, RouterLink,RouterOutlet],
  templateUrl: './userregistration.component.html',
  styleUrl: './userregistration.component.css'
})
export class UserregistrationComponent {
  registrationForm: FormGroup;
  submitted = false;
  router: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      location: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
    }, { validator: this.passwordMatchValidator });
  }


  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
   
   // if (this.registrationForm.valid)      
      console.log('User Registered Successfully', this.registrationForm.value);
      alert('Registration Successful!');
      this.registrationForm.reset();
      this.submitted = false;

   // }
   
  //  if(this.registrationForm.get('email')?.value === "mrunal@gmail.com" && this.registrationForm.get('password')?.value === "mrunal"  && this.registrationForm.get('first name')?.value === "Mrunal"  && this.registrationForm.get('last name')?.value === "chavan"  && this.registrationForm.get('location')?.value === "pune"  && this.registrationForm.get('mobile number')?.value === "0123456789")
  //   {
  //     alert("User Credentials are correct.Login successful!");
  //     this.router.navigate(['productlists-component']);
      
          
  //   } else
  //  {
  //      alert("User Credentials are incorrect.");
  //  }
    
  }

}
