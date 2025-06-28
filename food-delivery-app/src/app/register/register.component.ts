// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.errorMessage = '';  // Clear previous messages
    this.successMessage = ''; // Clear previous messages

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    
    this.authService.register(this.username, this.password).subscribe(
      () => {
          this.successMessage = 'Registration successful! You can now log in.';
          setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      (error) => {
          console.error('Registration error:', error); // Log the error for debugging
          this.errorMessage = error.error?.message || 'Registration failed: Unknown error';
      }
  );
  }
}

