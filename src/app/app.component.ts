import { Component } from '@angular/core';
import { Router,RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterLink, FormsModule, ReactiveFormsModule,RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: ' <a routerLink="/userregistration">Registration</a> | <a routerLink="/userlogin">Sign-In</a>'
  // ,

})
export class AppComponent {
  title = 'ProdInventSys';

  constructor(  
    private router: Router
  ) {}

  // onSubmit() {
      
  //     alert('Logout Successful!');    
  //     this.router.navigate(['userlogin-component']); 
 
  // }
  logout() {
    // Clear user session or authentication token (if used)
    localStorage.removeItem('userToken'); // Example: Clear token from local storage

    // Redirect to login page
    this.router.navigate(['/userlogin-component']);
  }

}
