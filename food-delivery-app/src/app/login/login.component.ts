import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); 
        localStorage.setItem('role', response.role);   
        console.log('Role stored:', response.role); // Log role for debugging
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/home']); 
        }, 2000); 
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
        this.successMessage = '';
      }
    );
  }

  // Corrected navigateToRegister method
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}

// import { Component } from '@angular/core';
// import { AuthService } from '../auth-service.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     FormsModule,
//     CommonModule
//   ],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {  // Ensure 'LoginComponent' is exported
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';
//   successMessage: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login(this.username, this.password).subscribe(
//       (response) => {
//         localStorage.setItem('token', response.token); 
//         localStorage.setItem('role', response.role);   
//         this.successMessage = 'Login successful!';
//         this.errorMessage = '';
//         setTimeout(() => {
//           this.router.navigate(['/home']); 
//         }, 2000); 
//       },
//       (error) => {
//         this.errorMessage = 'Invalid credentials';
//         this.successMessage = '';
//       }
//     );
//   }

//   navigateToRegister(): void {
//     this.router.navigate(['/register']);
//   }
// }

// import { Component } from '@angular/core';
// import { AuthService } from '../auth-service.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     FormsModule,
//     CommonModule
//   ],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';
//   successMessage: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login(this.username, this.password).subscribe(
//       (response: any) => {
//         this.successMessage = 'Login successful!';
//         this.errorMessage = '';
        
//         // Store user role in local storage
//         localStorage.setItem('userRole', response.role); // Assuming the role is included in the response

//         setTimeout(() => {
//           this.router.navigate(['/home']); // Navigate to the home page
//         }, 2000); // Redirect to home after 2 seconds
//       },
//       (error) => {
//         this.errorMessage = 'Invalid credentials';
//         this.successMessage = '';
//       }
//     );
//   }

//   navigateToRegister(): void {
//     this.router.navigate(['/register']);
//   }
// }


// import { Component } from '@angular/core';
// import { AuthService } from '../auth-service.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     FormsModule,
//     CommonModule
//   ],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';
//   successMessage: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login(this.username, this.password).subscribe(
//       () => {
//         this.successMessage = 'Login successful!';
//         this.errorMessage = '';
//         setTimeout(() => {
//           this.router.navigate(['/home']); // Navigate to the home page
//         }, 2000); // Redirect to home after 2 seconds
//       },
//       (error) => {
//         this.errorMessage = 'Invalid credentials';
//         this.successMessage = '';
//       }
//     );
//   }

//   navigateToRegister(): void {
//     this.router.navigate(['/register']);
//   }
// }





